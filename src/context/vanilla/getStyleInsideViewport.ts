import $ from "@/routes/$";
import { deepCompare } from "@/services/util";

export type ScrollInfo = Pick<DOMRect, "left" | "top" | "width" | "height"> & {
  scrollHeight: number;
};
const DefaultScrollInfo: ScrollInfo = {
  left: 0,
  top: 0,
  width: 0,
  height: 0,
  scrollHeight: 0,
};
const getScrollInfo = (() => {
  let stored: ScrollInfo = DefaultScrollInfo;
  return () => {
    const { clientWidth, clientHeight, scrollLeft, scrollTop, scrollHeight } =
      document.scrollingElement!;
    const newScrollInfo = {
      left: scrollLeft,
      top: scrollTop,
      width: clientWidth,
      height: clientHeight,
      scrollHeight,
    };
    if (!deepCompare(stored, newScrollInfo)) stored = newScrollInfo;
    return stored;
  };
})();
export const notifyScrollInfoChanged = () => {
  Observer.notify("scrollInfo", getScrollInfo());
};
const getViewportElem = (() => {
  let elem: HTMLElement | null = document.querySelector("#viewport");
  return () => {
    if (!elem) {
      elem = document.createElement("div");
      elem.id = "viewport";
      elem.style.cssText = "position: fixed; inset: 0; z-index: -1";
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
    if (!deepCompare(stored, newSize)) stored = newSize;
    return stored;
  };
})();

export const notifyViewportSizeChanged = () => {
  Observer.notify("viewportSize", getViewportSize());
};
const initViewportObserver = () => {
  window.addEventListener("scroll", notifyScrollInfoChanged);
  const resizeObserver = new ResizeObserver(notifyViewportSizeChanged);
  resizeObserver.observe(getViewportElem());
};

const _observerMap = new Map<string, Map<any, (val: unknown) => void>>();

const Observer = {
  observer<T>(event: string, target: HTMLElement, handler: (val: T) => void) {
    const entries = _observerMap.get(event) || new Map();
    entries.set(target, handler);
    _observerMap.set(event, entries);
  },
  unobserve(event: string, target: HTMLElement) {
    const entries = _observerMap.get(event);
    if (!entries) return;
    entries.delete(target);
    _observerMap.set(event, entries);
  },
  notify<T>(event: string, val: T) {
    const entries = _observerMap.get(event);
    if (entries) {
      for (const [, func] of entries) func(val);
    }
  },
};

export default Observer;

const getStyleInsideViewport = (
  $root: HTMLElement,
  $target: HTMLElement,
  viewportSize: ViewportSize,
) => {
  if (!$root || $target) return;
  const { width: vw, height: vh } = viewportSize;
  const rootRect = $root.getBoundingClientRect();
  const targetRect = $target.getBoundingClientRect();
  const horizontal = rootRect.right + targetRect.width < vw ? "right" : "left";
  const vertical = rootRect.bottom + targetRect.height < vh ? "bottom" : "top";
  return()
  ;
};


