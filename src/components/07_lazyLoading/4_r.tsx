import { useScrollInfo, useViewportSize } from "@/context/viewportContext";
import { lazy, useCallback, useEffect, useRef, useState } from "react";
import cx from "./cx";
import data from "./data";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

type Image = {
  src: string;
  width: number;
  height: number;
};

const LazyImageIO = ({ src, width, height }: Image) => {
  const figureRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { entries, observerRef } = useIntersectionObserver(imgRef);
  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const isVisible = entries.has(imgRef.current!);
    if (isVisible) {
      figureRef.current!.style.backgroundImage = `url(${src.replace("/600/320", "/60/32")})`;
      imgRef.current!.setAttribute("src", src);
      observerRef.current?.disconnect();
    }
  }, [src, entries, observerRef]);

  return (
    <figure ref={figureRef} className={cx("lazy-image", { lazy: !loaded })}>
      <img
        onLoad={handleLoad}
        ref={imgRef}
        width={width}
        height={height}
        alt=""
      />
    </figure>
  );
};

const LazyImageNative = ({ src, width, height }: Image) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <img
      loading="lazy"
      className={cx({ lazy: !loaded })}
      onLoad={handleLoad}
      src={src}
      width={width}
      height={height}
      alt=""
    />
  );
};
const isNativeSupported = "loading" in HTMLImageElement.prototype;
export const LazyImage = isNativeSupported ? LazyImageNative : LazyImageIO;

const LazyLoad4 = () => {
  return (
    <>
      <h2>지연로딩</h2>
      <h3>#4. React - IO + 작은 이미지 로딩 추가</h3>
      {data.map((url) => (
        <LazyImageIO src={url} key={url} width={600} height={320} />
      ))}
    </>
  );
};

export default LazyLoad4;
