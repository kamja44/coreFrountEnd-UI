import cx from "./cx";
import Tooltip1_React from "./Tooltip1_React";

const Tooltips = () => {
  return (
    <div className={cx("Tooltips")} style={{ marginBottom: 500 }}>
      <h2>툴팁</h2>
      <Tooltip1_React />
    </div>
  );
};

export default Tooltips;
