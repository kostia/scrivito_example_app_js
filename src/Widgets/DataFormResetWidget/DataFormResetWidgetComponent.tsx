import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormResetWidget } from "./DataFormResetWidgetClass";
import { DataFormContext } from "../DataFormWidget/DataFormWidgetComponent";

Scrivito.provideComponent(DataFormResetWidget, ({ widget }) => {
  const { isEditing } = React.useContext(DataFormContext);
  if (!isEditing) return null;

  return (
    <button type="reset" className={getClassName()}>
      {widget.get("title")}
    </button>
  );

  function getClassName() {
    let className = "btn";
    if (widget.get("size") === "small") className += " btn-sm";

    return className;
  }
});
