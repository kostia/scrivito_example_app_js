import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormWidget } from "./DataFormWidgetClass";

Scrivito.provideComponent(DataFormWidget, ({ widget }) => {
  // @ts-ignore
  const dataItem = Scrivito.useDataItem();
  const formRef = React.useRef<HTMLFormElement>();

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <Scrivito.ContentTag content={widget} attribute="template" />
    </form>
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
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
});