import { useEffect, useRef, useState } from "react";
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

const TabPanel = ({
  description,
  current,
}: Pick<TabItem, "description" | "current">) => {
  const [animationClassName, setAnimationClassName] = useState<string | null>(
    current ? "current" : null,
  );
  const prevRef = useRef(current);
  const handleAnimationEnd = () => {
    setAnimationClassName((prev) => {
      switch (prev) {
        case "exit":
          return null;
        case "enter":
          return "current";
      }
      return prev;
    });
  };
  useEffect(() => {
    if (prevRef.current !== current) {
      prevRef.current = current;
      setAnimationClassName(current ? "enter" : "exit");
    }
  }, [current]);
  return (
    <div
      className={cx("description", animationClassName)}
      onAnimationEnd={handleAnimationEnd}
    >
      {description}
    </div>
  );
};

function TabMenu3_3React() {
  const [currentId, setcurrentId] = useState<string>(data[0].id);
  const toggleItem = (id: string) => () => {
    setcurrentId(id);
  };
  return (
    <>
      <h3>
        #3-3. React<sub>css animation #3</sub>
      </h3>
      <div className={cx("container", "tabMenu3-3")}>
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
              <TabPanel
                key={item.id}
                {...item}
                current={currentId === item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TabMenu3_3React;
