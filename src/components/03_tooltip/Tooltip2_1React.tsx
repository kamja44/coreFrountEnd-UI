import SingleOpenContextProvider, {
  useSingleOpen,
} from "@/context/singleOpenContext";
import cx from "./cx";
import data from "./data";

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
      >
        {isOpen && <span className={cx("tooltip-layer")}>{description}</span>}
      </span>
    </span>
  );
};

const Tooltip2_1React = () => {
  return (
    <>
      <h3>
        #2-1. React<sub>하나만 열리도록 처리 - context API 사용</sub>
      </h3>
      <SingleOpenContextProvider>
        {data.map((item) => (
          <TooltipItem {...item} key={item.id} />
        ))}
      </SingleOpenContextProvider>
    </>
  );
};

export default Tooltip2_1React;
