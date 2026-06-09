import cx from "./cx";
import TabMenu1_React from "./tabMenu1_React";

const TabMenus = () => {
  return (
    <div className={cx("TabMenus")}>
      <h2>탭메뉴</h2>
      <TabMenu1_React />
    </div>
  );
};

export default TabMenus;
