import { useEffect, useRef } from "react";
import cx from "./cx";
import { data } from "./data";

type AccordionItem = {
  id: string;
  title: string;
  description: string;
  initialChecked: boolean;
};

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: AccordionItem) => {
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desc = descRef.current;
    if (!desc) return;
    desc.addEventListener("beforematch", toggle);
    return () => {
      desc.removeEventListener("beforematch", toggle);
    };
  }, [toggle]);

  return (
    <li className={cx("item", "item3", { current })}>
      <button type="button" className={cx("tab")} onClick={toggle}>
        {title}
      </button>
      <div
        className={cx("description")}
        ref={descRef}
        HIDDEN={current ? undefined : "until-found"}
      >
        {description}
      </div>
    </li>
  );
};

const Accordion6React = () => {
  return (
    <>
      <h3>
        #6 React<sub>html input(radio)만으로 동작</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((d, i) => (
          <AccordionItem {...d} key={d.id} initialChecked={i === 0} />
        ))}
      </ul>
    </>
  );
};

export default Accordion6React;
