import DigitSeperatedInputContainer from "./1_digitSeperatedInput";
import Form1 from "./2-1_uncontrolled";
// import Form2 from "./2-2_controlled";
import Form3 from "./3_hook-test";
import cx from "./cx";

const Forms = () => {
  return (
    <div className={cx("Forms")}>
      <h2>폼</h2>
      <DigitSeperatedInputContainer />
      <Form1 />
      {/* <Form2 /> */}
      <Form3 />
    </div>
  );
};

export default Forms;
