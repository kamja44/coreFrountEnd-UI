import cx from "./cx";
import TabMenu1_React from "./tabMenu1_React";
import TabMenu2_React from "./TabMenu2_React";

const TabMenus = () => {
  return (
    <div className={cx("TabMenus")}>
      <h2>탭메뉴</h2>
      <TabMenu1_React />
      <TabMenu2_React />
    </div>
  );
};

export default TabMenus;
