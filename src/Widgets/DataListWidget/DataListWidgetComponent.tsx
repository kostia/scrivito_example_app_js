import * as React from "react";
import * as Scrivito from "scrivito";

import { DataListWidget } from "./DataListWidgetClass";

Scrivito.provideComponent(DataListWidget, ({ widget }) => {
  const dataClass = widget.get("dataClass");
  if (!dataClass) return null;

  const DataClass = Scrivito.getClass(dataClass);
  if (!DataClass) return <>No “{dataClass}” data found</>;

  return (
    <>
      {DataClass
        // @ts-ignore
        .all()
        .take()
        .map((dataObj: Scrivito.Obj) => (
          <Scrivito.ContentTag
            key={dataObj.id()}
            content={widget}
            attribute="template"
            dataContext={dataObj}
          />
        ))}
    </>
  );
});
