import LineClamp1 from "./1_r";
import LineClamp2 from "./2_r";
import LineClamp3 from "./3_r";
import LineClamp4_V from "./4_v";
import cx from "./cx";

const LineClapms = () => {
  return (
    <div className={cx("LineClamps")}>
      <h2>여러말 말줄임</h2>
      <LineClamp1 />
      <LineClamp2 />
      <LineClamp3 />
      <LineClamp4_V />
    </div>
  );
};

export default LineClapms;
