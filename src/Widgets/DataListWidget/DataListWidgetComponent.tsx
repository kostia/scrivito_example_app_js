import * as React from "react";
import * as Scrivito from "scrivito";

import { DataListWidget } from "./DataListWidgetClass";

Scrivito.provideComponent(DataListWidget, ({ widget }) => {
  const dataClass = widget.get("dataClass");
  if (!dataClass) return null;

  const DataClass = Scrivito.getClass(dataClass);
  if (!DataClass) return <>No “{dataClass}” data found</>;

  const items = DataClass
    // @ts-ignore
    .all()
    .take();

  return (
    <div className="jr-list-flex separate-items">
      {items.map((item: Scrivito.Obj) => (
        <Scrivito.ContentTag
          content={widget}
          attribute="template"
          dataContext={item}
          key={item.id()}
        />
      ))}
    </div>
  );
});
