import { useCallback, useRef, type KeyboardEvent } from "react";
import cx from "./cx";

export const DigitSeperatedInput = ({
  name,
  id,
}: {
  name?: string;
  id?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef("0");
  const errorRef = useRef<HTMLSpanElement>(null);
  const handleInput = useCallback(() => {
    const $el = inputRef.current!;
    const indexFormLast = $el.value.length - ($el.selectionStart || 0);
    const originalValue = Number($el.value.replace(/,/g, ""));
    if (Number.isNaN(originalValue)) {
      $el.setCustomValidity("숫자만 입력 가능합니다");
      $el.value = valueRef.current;
    } else {
      $el.setCustomValidity("");
      $el.value = originalValue.toLocaleString();
      valueRef.current = $el.value;
    }
    $el.checkValidity();
    errorRef.current!.textContent = $el.validationMessage;
    $el.value = originalValue.toLocaleString();
    const index = $el.value.length - indexFormLast;
    $el.setSelectionRange(index, index);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const $el = inputRef.current!;
    const index = $el.selectionStart || 0;
    const value = $el.value;

    if (index < 2 || e.key !== "Backspace" || value[index - 1] !== ",") {
      return;
    }
    $el.value = `${value.slice(0, index - 2)}${value.slice(index - 1)}`;
    $el.setSelectionRange(index - 1, index - 1);
  }, []);

  const handleFocus = useCallback(() => {
    window.requestAnimationFrame(() => {
      const $el = inputRef.current;
      if (!$el) {
        return;
      }
      const pos = $el.value.length;
      $el.setSelectionRange(pos, pos);
    });
  }, []);
  return (
    <>
      <input
        type="text"
        name={name}
        id={id}
        ref={inputRef}
        defaultValue={0}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
      <span className={cx("errorMsg")} ref={errorRef} />
    </>
  );
};

const DigitSeperatedInputContainer = () => {
  return (
    <>
      <h3>
        #1. React<sub>구분 기호 자동 삽입 인풋</sub>
      </h3>
      <DigitSeperatedInput />
    </>
  );
};
export default DigitSeperatedInputContainer;
