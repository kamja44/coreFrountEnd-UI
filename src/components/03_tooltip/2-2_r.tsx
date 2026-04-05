import { useCallback, useEffect, useRef, useState } from "react";
import data from "./data";
import cx from "./cx";
import useClickOutside from "@/hooks/useClickOutside";

type TooltipProps = {
  id: string;
  text: string;
  description: string;
};

const TooltipDescription = ({
  description,
  handleClose,
}: {
  description: string;
  handleClose: () => void;
}) => {
  const ref = useClickOutside(handleClose);
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handleClose();
    },
    [handleClose],
  );
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, { capture: true });
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
  return <span className={cx("tooltip-layer")}>{description}</span>;
};

const TooltipItem = ({ text, description }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClose = () => setIsOpen(false);
  return (
    <span className={cx("tooltip-root")}>
      {text}
      <span
        className={cx("tooltip-trigger", { open: isOpen })}
        onClick={handleClick}
      ></span>
      {isOpen && (
        <TooltipDescription
          description={description}
          handleClose={handleClose}
        />
      )}
    </span>
  );
};

const Tooltip2_2 = () => {
  return (
    <>
      <h3>
        #2-2. React <sub>외부 클릭으로 툴팁 닫기</sub>
      </h3>
      {data.map((d) => (
        <TooltipItem {...d} key={d.id} />
      ))}
    </>
  );
};

export default Tooltip2_2;
