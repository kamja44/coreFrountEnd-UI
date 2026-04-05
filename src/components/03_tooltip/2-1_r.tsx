import cx from "./cx";
import data from "./data";
import SingleOpenContextProvider, { useSingleOpen } from "./singleOpenContext";

type TooltipProps = {
  id: string;
  text: string;
  description: string;
};

const TooltipItem = ({ id, text, description }: TooltipProps) => {
  const [isOpen, toggle] = useSingleOpen(id);
  const handleClick = () => {
    toggle((prev) => (prev === id ? null : id));
  };
  return (
    <span className={cx("tooltip-root")}>
      {text}
      <span
        className={cx("tooltip-trigger", { open: isOpen })}
        onClick={handleClick}
      ></span>
      {isOpen && <span className={cx("tooltip-layer")}>{description}</span>}
    </span>
  );
};

const Tooltip2_1 = () => {
  return (
    <>
      <h3>
        #2-1. React <sub>하나만 열리도록 처리 - context API 사용</sub>
      </h3>
      <SingleOpenContextProvider>
        {data.map((d) => (
          <TooltipItem {...d} key={d.id} />
        ))}
      </SingleOpenContextProvider>
    </>
  );
};

export default Tooltip2_1;
