import { useEffect, useRef, useState } from "react";
import cx from "./cx";
import data from "./data";

type AccordionItem = {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
};

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: AccordionItem) => {
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $desc = descRef.current;
    if (!$desc) {
      return;
    }
    $desc.style.maxHeight = current ? `${$desc.scrollHeight}px` : "0";
  }, [current]);
  return (
    <li className={cx("item", "item3", { current })} key={id}>
      <button type="button" className={cx("tab")} onClick={toggle}>
        {title}
      </button>
      <div className={cx("description")} ref={descRef}>
        {description}
      </div>
    </li>
  );
};

const Accordion3_2 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  const toggleItem = (id: string) => {
    setCurrentId((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <h3>
        #1. React <sub>현재 desc만 렌더링</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((d) => (
          <AccordionItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={() => toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion3_2;
