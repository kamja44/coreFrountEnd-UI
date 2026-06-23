import { useCallback, type SyntheticEvent } from "react";
import cx from "./cx";
import measureLines from "@/service/measureLines";
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

const ReactiveTextBoxes1_Vanilla = () => {
  return <VanillaWrapper title="#1" initiator={initiator} />;
};

export default ReactiveTextBoxes1_Vanilla;
