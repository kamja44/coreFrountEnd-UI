import cx from "./cx";
import LineClamp1_React from "./LineClamp1_React";
import LineClamp2_React from "./LineClamp2_React";
import LineClamp3_React from "./LineClamp3_React";

const LineClamps = () => {
  return (
    <div className={cx("LineClamps")}>
      <h2>여러줄 말줄임</h2>
      <LineClamp1_React />
      <LineClamp2_React />
      <LineClamp3_React />
    </div>
  );
};

export default LineClamps;
