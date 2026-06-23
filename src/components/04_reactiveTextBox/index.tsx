import cx from "./cx";
import ReactiveTextBoxes1_React from "./ReactiveTextBoxes1_React";
import ReactiveTextBoxes2_React from "./ReactiveTextBoxes2_React";
import ReactiveTextBoxes3_React from "./ReactiveTextBoxes3_React";

const ReactiveTextBoxes = () => {
  return (
    <div className={cx("ReactiveTextBoxes")}>
      <h2>반응형 텍스트박스</h2>
      <ReactiveTextBoxes1_React />
      <ReactiveTextBoxes2_React />
      <ReactiveTextBoxes3_React />
    </div>
  );
};

export default ReactiveTextBoxes;
