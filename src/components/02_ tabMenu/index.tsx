import cx from "./cx";
import TabMenu1_React from "./tabMenu1_React";
import TabMenu2_React from "./TabMenu2_React";
import TabMenu3_1React from "./TabMenu3_1React";
import TabMenu3_2React from "./TabMenu3_2React";
import TabMenu3_3React from "./TabMenu3_3React";
import TabMenu4_Vanilla from "./TabMenu4_Vanilla";

const TabMenus = () => {
  return (
    <div className={cx("TabMenus")}>
      <h2>탭메뉴</h2>
      <TabMenu1_React />
      <TabMenu2_React />
      <TabMenu3_1React />
      <TabMenu3_2React />
      <TabMenu3_3React />
      <TabMenu4_Vanilla />
    </div>
  );
};

export default TabMenus;
