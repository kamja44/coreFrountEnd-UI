import { useState } from "react";
import cx from "./cx";
import { data } from "./data";

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
  return (
    <li className={cx("item", "item3", { current })}>
      <button type="button" className={cx("tab")} onClick={toggle}>
        {title}
      </button>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const Accordion3_1React = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  const toggleItem = (id: string) => {
    setCurrentId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <h3>
        #3-1. React <sub>기본 애니메이션</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((d) => (
          <AccordionItem
            {...d}
            current={currentId === d.id}
            toggle={() => toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion3_1React;
