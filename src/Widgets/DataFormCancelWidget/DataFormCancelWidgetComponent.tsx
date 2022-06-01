import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormCancelWidget } from "./DataFormCancelWidgetClass";
import { DataFormContext } from "../DataFormWidget/DataFormWidgetComponent";

Scrivito.provideComponent(DataFormCancelWidget, ({ widget }) => {
  const dataForm = React.useContext(DataFormContext);

  return (
    <div className={getClassName()} onClick={onClick}>
      {widget.get("title")}
    </div>
  );

  function getClassName() {
    let className = "btn";
    if (widget.get("size") === "small") className += " btn-sm";

    return className;
  }

  function onClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (dataForm) dataForm.clear();
  }
});
