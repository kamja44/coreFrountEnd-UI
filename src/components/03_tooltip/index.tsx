import cx from "./cx";
import Tooltip1_React from "./Tooltip1_React";
import Tooltip2_1React from "./Tooltip2_1React";
import Tooltip2_2React from "./Tooltip2_2React";
import Tooltip2_3HTML from "./Tooltip2_3HTML";
import Tooltip3_React from "./Tooltip3_React";

const Tooltips = () => {
  return (
    <div className={cx("Tooltips")} style={{ marginBottom: 500 }}>
      <h2>툴팁</h2>
      <Tooltip1_React />
      <Tooltip2_1React />
      <Tooltip2_2React />
      <Tooltip2_3HTML />
      <Tooltip3_React />
    </div>
  );
};

export default Tooltips;
