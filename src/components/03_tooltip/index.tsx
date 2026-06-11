import cx from "./cx";
import Tooltip1_React from "./Tooltip1_React";
import Tooltip2_1React from "./Tooltip2_1React";
import Tooltip2_2React from "./Tooltip2_2React";

const Tooltips = () => {
  return (
    <div className={cx("Tooltips")} style={{ marginBottom: 500 }}>
      <h2>툴팁</h2>
      <Tooltip1_React />
      <Tooltip2_1React />
      <Tooltip2_2React />
    </div>
  );
};

export default Tooltips;
