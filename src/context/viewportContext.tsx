import { deepCompare } from "@/service/utils";
import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type ScrollInfo = Pick<DOMRect, "left" | "top" | "width" | "height"> & {
  scrollHeight: number;
};
const DefaultScrollInfo: ScrollInfo = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  scrollHeight: 0,
};

const getScrollInfo = (() => {
  let stored: ScrollInfo = DefaultScrollInfo;
  return () => {
    const elem = document.scrollingElement!;
    const { clientWidth, clientHeight, scrollLeft, scrollTop, scrollHeight } =
      elem;
    const newScrollInfo = {
      left: scrollLeft,
      top: scrollTop,
      width: clientWidth,
      height: clientHeight,
      scrollHeight,
    };

    if (!deepCompare(stored, newScrollInfo)) {
      stored = newScrollInfo;
    }
    return stored;
  };
})();

const subscribeScroll = (getSnapshot: () => void) => {
  const callback = () => window.requestAnimationFrame(getSnapshot);
  const resizeObserver = new ResizeObserver(callback);
  resizeObserver.observe(document.scrollingElement!);
  window.addEventListener("scroll", callback);

  return () => {
    window.removeEventListener("scroll", getSnapshot);
    resizeObserver.disconnect();
  };
};

const ScrollInfoContext = createContext<ScrollInfo>(DefaultScrollInfo);
const ScrollInfoContextProvider = ({ children }: { children: ReactNode }) => {
  const scrollInfo = useSyncExternalStore(
    subscribeScroll,
    getScrollInfo,
    () => DefaultScrollInfo,
  );

  return <ScrollInfoContext value={scrollInfo}>{children}</ScrollInfoContext>;
};

const getViewportElem = (() => {
  let elem: HTMLElement | null = document.querySelector("#viewport");
  return () => {
    if (!elem) {
      elem = document.createElement("div");
      elem.id = "viewport";
      elem.style.cssText = "position: fixed; inset: 0; z-index: -1;";
      document.body.insertAdjacentElement("afterbegin", elem);
    }
    return elem;
  };
})();
export type ViewportSize = Pick<DOMRect, "width" | "height">;
const DefaultViewportSize: ViewportSize = { width: 0, height: 0 };
const getViewportSize = (() => {
  let stored: ViewportSize = DefaultViewportSize;
  return () => {
    const { clientWidth, clientHeight } = getViewportElem();
    const newSize = { width: clientWidth, height: clientHeight };
    if (!deepCompare(stored, newSize)) {
      stored = newSize;
    }
    return stored;
  };
})();

const subscribeResize = (getSnapshot: () => void) => {
  const callback = () => window.requestAnimationFrame(getSnapshot);
  const resizeObserver = new ResizeObserver(callback);
  resizeObserver.observe(getViewportElem());
  return () => {
    resizeObserver.disconnect();
  };
};

const ViewportSizeContext = createContext<ViewportSize>(DefaultViewportSize);
const ViewportSizeContextProvider = ({ children }: { children: ReactNode }) => {
  const viewportSize = useSyncExternalStore(
    subscribeResize,
    getViewportSize,
    () => DefaultViewportSize,
  );
  return (
    <ViewportSizeContext value={viewportSize!}>{children}</ViewportSizeContext>
  );
};
const ViewportContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollInfoContextProvider>
      <ViewportSizeContextProvider>{children}</ViewportSizeContextProvider>
    </ScrollInfoContextProvider>
  );
};

export default ViewportContextProvider;
export const useScrollInfo = () => useContext(ScrollInfoContext);
export const useViewportSize = () => useContext(ViewportSizeContext);
