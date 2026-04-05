import measureLines from "@/services/measureLines";
import cx from "./cx";
import VanillaWrapper from "../vanillaWrapper";

const initiator = (wrapper: HTMLDivElement) => {
  const $elem = document.createElement("textarea");
  $elem.addEventListener("input", () => {
    $elem.rows = measureLines($elem, $elem.value);
  });
  const $container = document.createElement("div");
  $container.classList.add(cx("container"));
  $container.append($elem);
  wrapper.append($container);
};

const ReactiveTextBox4 = () => {
  return <VanillaWrapper title="#4" initiator={initiator} />;
};

export default ReactiveTextBox4;
