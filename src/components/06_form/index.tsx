import cx from "./cx";
import { DigitSeperatedInput } from "./DigitSeperatedinput_01";
import UnControlledForm2_1 from "./UnControlledForm_2_1";

const Forms = () => {
  return (
    <div className={cx("Forms")}>
      <h2>폼</h2>
      <DigitSeperatedInput />
      <UnControlledForm2_1 />
    </div>
  );
};

export default Forms;
