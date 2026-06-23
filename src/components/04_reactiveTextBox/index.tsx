import cx from "./cx";
import ReactiveTextBoxes1_React from "./ReactiveTextBoxes1_React";

const ReactiveTextBoxes = () => {
  return (
    <div className={cx("ReactiveTextBoxes")}>
      <h2>반응형 텍스트박스</h2>
      <ReactiveTextBoxes1_React />
    </div>
  );
};

export default ReactiveTextBoxes;
