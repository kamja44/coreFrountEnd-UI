import { useCallback, useEffect, useRef } from "react";

const useClickOutside = (callback: (e: MouseEvent) => void) => {
  const ref = useRef<HTMLElement>(null);
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e);
      }
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return document.removeEventListener("click", handleClickOutside, true);
  }, [handleClickOutside]);

  return ref;
};

export default useClickOutside;
