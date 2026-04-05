import { useScrollInfo } from "@/context/viewportContext";
import cx from "./cx";
import data from "./data";

type TooltipProps = { id: string; text: string; description: string };
const TooltipItem = ({ id, text, description }: TooltipProps) => {
  return (
    <span className={cx("tooltip-root")}>
      {text}
      <details className={cx("details", "anchor")} name="tooltip">
        <summary className={cx("tooltip-trigger")} />
      </details>
      <span className={cx("anchor-target")}>{description}</span>
    </span>
  );
};

const Tooltip4 = () => {
  const scrollInfo = useScrollInfo();
  console.log(scrollInfo);
  return (
    <>
      <h3>
        #4. React <sub>anchor positioning</sub>
      </h3>
      {data.map((d) => (
        <TooltipItem {...d} key={d.id} />
      ))}
    </>
  );
};

export default Tooltip4;
