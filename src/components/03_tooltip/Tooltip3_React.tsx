import data from "./data";
import cx from "./cx";
import { useScrollInfo } from "@/context/viewportContext";

type TooltipProps = {
  id: string;
  text: string;
  description: string;
};

const TooltipItem = ({ text, description }: TooltipProps) => {
  return (
    <span className={cx("tooltip-root")}>
      {text}
      <details className={cx("details")} name="tooltip">
        <summary className={cx("tooltip-trigger")} />
        <span className={cx("tooltip-layer")}>{description}</span>
      </details>
    </span>
  );
};

const Tooltip3_React = () => {
  const scrollInfo = useScrollInfo();
  console.log(scrollInfo);
  return (
    <>
      <h3>
        #3. React<sub>화면을 벗어나지 않도록 처리 (1) - 직접 계산</sub>
      </h3>
      {data.map((item) => {
        return <TooltipItem {...item} key={item.id} />;
      })}
    </>
  );
};

export default Tooltip3_React;
