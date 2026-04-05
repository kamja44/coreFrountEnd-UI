import { useScrollInfo } from "@/context/viewportContext";
import cx from "./cx";
import data from "./data";
import { useRef } from "react";
import useStyleInsideViewport from "@/hooks/useStyleInsideViewport";

type TooltipProps = { id: string; text: string; description: string };
const TooltipItem = ({ id, text, description }: TooltipProps) => {
  const rootRef = useRef<HTMLDetailsElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const style = useStyleInsideViewport(rootRef, targetRef);
  return (
    <span className={cx("tooltip-root")}>
      {text}
      <details className={cx("details")} name="tooltip" ref={rootRef}>
        <summary className={cx("tooltip-trigger")} />
        <span className={cx("tooltip-layer")} style={style} ref={targetRef}>
          {description}
        </span>
      </details>
    </span>
  );
};

const Tooltip3 = () => {
  const scrollInfo = useScrollInfo();
  console.log(scrollInfo);
  return (
    <>
      <h3>
        #3. React <sub>화면을 벗어나지 않도록 처리 (1) - 직접 계산</sub>
      </h3>
      {data.map((d) => (
        <TooltipItem {...d} key={d.id} />
      ))}
    </>
  );
};

export default Tooltip3;
