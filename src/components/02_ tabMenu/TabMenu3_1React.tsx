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

function TabMenu3_1React() {
  const [currentId, setcurrentId] = useState<string>(data[0].id);
  const toggleItem = (id: string) => () => {
    setcurrentId(id);
  };
  return (
    <>
      <h3>
        #3-1. React<sub>css animation (transition)</sub>
      </h3>
      <div className={cx("container", "tabMenu3-1")}>
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
        <div className={cx("tabPanel")}>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={cx("description", {
                  current: currentId === item.id,
                })}
              >
                {item.description}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TabMenu3_1React;
