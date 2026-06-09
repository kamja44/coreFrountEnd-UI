import { useState } from "react";
import cx from "./cx";
import data from "./data";

type TabItem = {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
};

const TabItem = ({ id, title, current, toggle }: TabItem) => {
  return (
    <li className={cx("tab", { current })} key={id}>
      <button type="button" onClick={toggle}>
        {title}
      </button>
    </li>
  );
};

function TabMenu1_React() {
  const [currentId, setcurrentId] = useState<string>(data[0].id);
  const toggleItem = (id: string) => () => {
    setcurrentId(id);
  };
  const currentDescription =
    data.find((d) => d.id === currentId)?.description || "";
  return (
    <>
      <h3>
        #1. React<sub>현재 desc만 html로 그리기</sub>
      </h3>
      <div className={cx("container")}>
        <ul className={cx("tabList")}>
          {data.map((d) => {
            return (
              <TabItem
                key={d.id}
                {...d}
                current={currentId === d.id}
                toggle={toggleItem(d.id)}
              />
            );
          })}
        </ul>
        <div className={cx("description")}>{currentDescription}</div>
      </div>
    </>
  );
}

export default TabMenu1_React;
