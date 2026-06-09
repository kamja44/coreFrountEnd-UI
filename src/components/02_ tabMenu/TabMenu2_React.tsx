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

function TabMenu2_React() {
  const [currentId, setcurrentId] = useState<string>(data[0].id);
  const toggleItem = (id: string) => () => {
    setcurrentId(id);
  };
  return (
    <>
      <h3>
        #2. React<sub>css로 hidden/show 처리</sub>
      </h3>
      <div className={cx("container", "tabMenu2")}>
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
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={cx("description", { current: currentId === item.id })}
            >
              {item.description}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TabMenu2_React;
