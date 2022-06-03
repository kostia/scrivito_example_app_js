import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormDeleteWidget } from "./DataFormDeleteWidgetClass";

Scrivito.provideComponent(DataFormDeleteWidget, ({ widget }) => {
  // @ts-ignore
  const dataItem = Scrivito.useDataItem();

  return (
    <div className={getClassName()} onClick={onClick}>
      {widget.get("title")}
    </div>
  );

  function getClassName() {
    let className = "btn";

    if (widget.get("size") === "small") className += " btn-sm";
    if (widget.get("dangerous")) className += " btn-danger";

    return className;
  }

  function onClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (widget.get("dangerous")) {
      if (window.confirm("Are you sure?")) deleteDataItem();
    } else {
      deleteDataItem();
    }
  }

  function deleteDataItem() {
    dataItem?.obj().destroy();
  }
});
