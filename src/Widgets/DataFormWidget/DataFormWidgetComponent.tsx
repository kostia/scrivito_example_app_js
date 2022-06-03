import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormWidget } from "./DataFormWidgetClass";

export const SUBMIT_EVENT_TYPE = "submitDataForm";
export const RESET_EVENT_TYPE = "resetDataForm";

Scrivito.provideComponent(DataFormWidget, ({ widget }) => {
  // @ts-ignore
  const dataItem = Scrivito.useDataItem();

  const formRef = React.useRef<HTMLFormElement>();
  const onSubmitCallback = React.useCallback(onSubmit, []);
  const onResetCallback = React.useCallback(onReset, []);

  React.useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    form.addEventListener(SUBMIT_EVENT_TYPE, onSubmitCallback);
    form.addEventListener(RESET_EVENT_TYPE, onResetCallback);

    return () => {
      const form = formRef.current;

      if (form) {
        form.removeEventListener(SUBMIT_EVENT_TYPE, onSubmitCallback);
        form.removeEventListener(RESET_EVENT_TYPE, onResetCallback);
      }
    };
  }, [onSubmitCallback, onResetCallback]);

  return (
    <form ref={formRef}>
      <Scrivito.ContentTag content={widget} attribute="template" />
    </form>
  );

  function onSubmit(e: CustomEvent) {
    e.stopPropagation();

    const obj = dataItem?.obj();
    const form = formRef.current;

    if (obj && form) {
      const formData = new FormData(form);
      const nextAttributes: { [attributeName: string]: string } = {};

      formData.forEach((nextValue, attributeName) => {
        const prevValue = obj.get(attributeName);

        if (typeof nextValue === "string" && nextValue !== prevValue) {
          nextAttributes[attributeName] = nextValue;
        }
      });

      obj.update(nextAttributes);
    }
  }

  function onReset(e: CustomEvent) {
    e.stopPropagation();
    formRef?.current?.reset();
  }
});
