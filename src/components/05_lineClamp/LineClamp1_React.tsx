import { useViewportSize } from "@/context/viewportContext";
import data from "./data";
import { useCallback, useEffect, useRef, useState } from "react";
import measureLines from "@/service/measureLines";
import cx from "./cx";

const LineClampedText = ({
  text,
  maxLines = Number.MAX_SAFE_INTEGER,
}: {
  text: string;
  maxLines: number;
}) => {
  const { width: viweportWidth } = useViewportSize();
  const elemRef = useRef<HTMLDivElement>(null);
  const [showClampButton, setClampButton] = useState(false);
  const [isClamped, setIsClamped] = useState(false);

  const toggleClamped = useCallback(() => {
    setIsClamped((prev) => !prev);
  }, []);
  useEffect(() => {
    if (!text || !elemRef.current || !viweportWidth) {
      return;
    }
    const linesOverflow = measureLines(elemRef.current, text) > maxLines;
    setIsClamped(linesOverflow);
    setClampButton(linesOverflow);
  }, [viweportWidth, text, maxLines]);

  return (
    <div className={cx("content", { clamped: isClamped })}>
      <div
        className={cx("text")}
        ref={elemRef}
        style={{ WebkitLineClamp: isClamped ? maxLines : "" }}
      >
        {text}
      </div>
      {showClampButton && (
        <button
          type="button"
          className={cx("buttonMore")}
          onClick={toggleClamped}
        />
      )}
    </div>
  );
};

const LineClamp1_React = () => {
  return (
    <>
      <h3>
        #1. React<sub>canvas - 3줄 말 줄임</sub>
      </h3>
      {data.map((text) => (
        <LineClampedText key={text} text={text} maxLines={3} />
      ))}
    </>
  );
};

export default LineClamp1_React;
