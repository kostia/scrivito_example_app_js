import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormSubmitWidget } from "./DataFormSubmitWidgetClass";
import { DataFormContext } from "../DataFormWidget/DataFormWidgetComponent";

Scrivito.provideComponent(DataFormSubmitWidget, ({ widget }) => {
  const dataForm = React.useContext(DataFormContext);

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

    if (dataForm && window.confirm("Are you sure?")) {
      dataForm.submit();
    }
  }
});
