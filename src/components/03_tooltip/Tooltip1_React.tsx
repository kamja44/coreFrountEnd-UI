import { useState } from "react";
import cx from "./cx";
import data from "./data";

type TooltipProps = { text: string; description: string };
const TooltipItem = ({ text, description }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
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

const Tooltip1_React = () => {
  return (
    <>
      <h3>
        #1. React<sub>터치 또는 클릭으로 동작하는 툴팁</sub>
      </h3>
      {data.map((item) => (
        <TooltipItem {...item} key={item.id} />
      ))}
    </>
  );
};
export default Tooltip1_React;
