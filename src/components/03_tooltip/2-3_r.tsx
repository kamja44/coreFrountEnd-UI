import cx from "./cx";
import data from "./data";

type TooltipProps = { id: string; text: string; description: string };
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

const Tooltip2_3 = () => {
  return (
    <>
      <h3>
        #2-3. React <sub>하나만 열리도록 처리 - html details 태그 사용</sub>
      </h3>
      {data.map((d) => (
        <TooltipItem {...d} key={d.id} />
      ))}
    </>
  );
};

export default Tooltip2_3;
