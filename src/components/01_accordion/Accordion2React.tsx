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
    <li className={cx("item", "item2", { current })}>
      <button type="button" className={cx("tab")} onClick={toggle}>
        {title}
      </button>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const Accordion2React = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  const toggleItem = (id: string) => {
    setCurrentId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <h3>
        #2. React <sub>CSS로 hidden/show 처리</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map(({ id, title, description }) => (
          <li className={cx("item", { current: id === currentId })} key={id}>
            <button
              type="button"
              className={cx("tab")}
              onClick={() => toggleItem(id)}
            >
              {title}
            </button>
            {currentId === id && (
              <div className={cx("description")}>{description}</div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Accordion2React;
