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
        <DataListItem widget={widget} item={item} key={item.id()} />
      ))}
    </div>
  );
});

const DataListItem = Scrivito.connect(
  ({ widget, item }: { widget: Scrivito.Widget; item: Scrivito.Obj }) => {
    return (
      <div className="jr-list-item">
        <div className="jr-list-group shrink">
          <i className={iconClassName()} />
        </div>

        <Scrivito.ContentTag
          content={widget}
          attribute="template"
          dataContext={item}
          className="jr-list-group grow"
        />

        <div className="jr-list-group shrink">
          <i className="jr-icon jr-icon-chevron-right d-block text-muted" />
        </div>
      </div>
    );

    function iconClassName() {
      const iconName = widget.get("iconName") || widget.obj().get("iconName");
      return `jr-icon jr-icon-${iconName}-big me-2 d-block text-orange`;
    }
  }
);
