import { useEffect, useRef } from "react";
import useInfiniteFetcher from "./useInfiniteFetcher";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const useScrollFetch = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteFetcher();
  const moreRef = useRef<HTMLDivElement>(null);
  const { entries, observerRef } = useIntersectionObserver(moreRef);
  const preEntries = useRef<any>(null);
  useEffect(() => {
    // console.log({ hasNextPage, entries, isLoading, fetchNextPage });
    if (
      hasNextPage &&
      !isLoading &&
      entries.has(moreRef.current!) &&
      entries !== preEntries.current
    ) {
      //   console.log("call fetchNextPage");
      preEntries.current = entries;
      fetchNextPage();
    }
  }, [hasNextPage, entries, isLoading, fetchNextPage]);
  useEffect(() => {
    if (!hasNextPage) observerRef.current?.disconnect();
  }, [hasNextPage, observerRef]);
  return { data, isLoading, moreRef };
};
export default useScrollFetch;
