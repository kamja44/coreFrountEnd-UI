import Accordion1React from "./Accordion1React";
import Accordion2React from "./Accordion2React";
import Accordion3_1React from "./Accordion3_1React";
import Accordion3_2React from "./Accordion3_2React";
import cx from "./cx";

const Accordions = () => {
  return (
    <div className={cx("Accordions")}>
      <h2>아코디언</h2>
      <Accordion1React />
      <Accordion2React />
      <Accordion3_1React />
      <Accordion3_2React />
    </div>
  );
};

export default Accordions;
