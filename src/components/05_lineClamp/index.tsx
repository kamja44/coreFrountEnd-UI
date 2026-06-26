import cx from "./cx";
import LineClamp1_React from "./LineClamp1_React";

const LineClamps = () => {
  return (
    <div className={cx("LineClamps")}>
      <h2>여러줄 말줄임</h2>
      <LineClamp1_React />
    </div>
  );
};

export default LineClamps;
