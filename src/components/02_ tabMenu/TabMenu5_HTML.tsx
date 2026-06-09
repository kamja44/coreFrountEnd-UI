import cx from "./cx";
import data from "./data";

type TabItem = {
  id: string;
  title: string;
  description: string;
  initialChecked: boolean;
};
const TabItem = ({ id, title, description, initialChecked }: TabItem) => {
  return (
    <li className={cx("item")}>
      <input
        type="radio"
        className={cx("input")}
        name="tabMenu"
        id={id}
        defaultChecked={initialChecked}
      />
      <label htmlFor={id} className={cx("tab")}>
        {title}
      </label>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const TabMenu5_HTML = () => {
  return (
    <>
      <h3>
        #5. React<sub>html input(radio)로 처리</sub>
      </h3>
      <ul className={cx("container", "tabMenu5")}>
        {data.map((item, index) => {
          return (
            <TabItem {...item} key={item.id} initialChecked={index === 0} />
          );
        })}
      </ul>
    </>
  );
};

export default TabMenu5_HTML;
