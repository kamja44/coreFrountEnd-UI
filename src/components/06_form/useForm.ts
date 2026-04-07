import { useCallback, useRef, type FormEvent } from "react";

type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type FormControl = Partial<
  Record<keyof ValidityState, string> & {
    additionalValidator: ($el: FormElement, formData: FormData) => boolean;
    onInput: ($el: FormElement, formData: FormData) => void;
    transformData: (formData: FormData) => any;
  }
>;

export type FormController = Record<string, FormControl>;
const validationKeys: (keyof ValidityState)[] = [
  "badInput",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "tooLong",
  "tooShort",
  "typeMismatch",
  "valueMissing",
];

const useForm = (
  formController: FormController,
  customNotificationSelector?: string,
) => {
  const formRef = useRef<HTMLFormElement>(null);
  const reportValidity = useCallback(
    ($el: FormElement) => {
      if (!customNotificationSelector) return $el.reportValidity();
      const isValid = $el.checkValidity();
      const $notification = $el.parentElement!.querySelector(
        customNotificationSelector,
      );
      if ($notification) {
        $notification.textContent = $el.validationMessage;
        $el.focus();
      }
      return isValid;
    },
    [customNotificationSelector],
  );
  const checkAdditionalValidity = ($el: FormElement, formData: FormData) => {
    const inputController = formController[$el.id];
    const { additionalValidator, customError = "[custom error]" } =
      inputController || {};
    const isValid = !additionalValidator || additionalValidator($el, formData);
    if (!isValid) $el.setCustomValidity(customError);
    return isValid;
  };

  const handleInvalid = useCallback(
    (e: FormEvent) => {
      const $el = e.target as FormElement;
      const formData = new FormData($el.form!);
      if (checkAdditionalValidity($el, formData)) {
        const inputController = formController[$el.id];
        const invalidKey = validationKeys.find((k) => $el.validity[k]);
        const errorText = (invalidKey && inputController?.[invalidKey]) || "";
        $el.setCustomValidity(errorText);
      }
      return { $el, formData };
    },
    [formController, checkAdditionalValidity],
  );

  const handleInput = useCallback(
    (e: FormEvent) => {
      const { $el, formData } = handleInvalid(e);
      formController[$el.id]?.onInput?.($el, formData);
      reportValidity($el);
    },
    [formController, handleInvalid, reportValidity],
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      try {
        e.preventDefault();
        const $form = e.target as HTMLFormElement;
        const data = new FormData($form);
        for (const $el of $form.elements) {
          checkAdditionalValidity($el as FormElement, data);
          if (!reportValidity($el as FormElement)) {
            throw new Error("some form field are invalid");
          }
        }
        Array.from($form.elements).forEach(($el) => {
          checkAdditionalValidity($el as FormElement, data);
        });
        if (!$form.reportValidity()) return;
        for (const [key] of data) {
          if (formController[key]?.transformData) {
            data.set(key, formController[key].transformData(data));
          }
        }
        console.log(Object.fromEntries(data));
      } catch (error) {
        console.log(error);
      }
    },
    [formController, checkAdditionalValidity, reportValidity],
  );
  return { formRef, handleInput, handleInvalid, handleSubmit };
};

export default useForm;
