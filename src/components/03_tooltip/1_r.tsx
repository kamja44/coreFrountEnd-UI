import { useState } from "react";
import data from "./data";
import cx from "./cx";

type TooltipProps = {
  text: string;
  description: string;
};

const TooltipItem = ({ text, description }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
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

const Tooltip1 = () => {
  return (
    <>
      <h3>
        #1. React <sub>터치 또는 클릭으로 동작하는 툴팁</sub>
      </h3>
      {data.map((d) => (
        <TooltipItem {...d} key={d.id} />
      ))}
    </>
  );
};

export default Tooltip1;
