import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormSubmitWidget } from "./DataFormSubmitWidgetClass";
import { DataFormContext } from "../DataFormWidget/DataFormWidgetComponent";

Scrivito.provideComponent(DataFormSubmitWidget, ({ widget }) => {
  const { isEditing } = React.useContext(DataFormContext);
  if (!isEditing) return null;

  return (
    <button type="submit" className={getClassName()}>
      {widget.get("title")}
    </button>
  );

  function getClassName() {
    let className = "btn";
    if (widget.get("size") === "small") className += " btn-sm";

    return className;
  }
});
