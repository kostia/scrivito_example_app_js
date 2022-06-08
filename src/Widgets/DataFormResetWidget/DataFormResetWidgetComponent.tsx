import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormResetWidget } from "./DataFormResetWidgetClass";

Scrivito.provideComponent(DataFormResetWidget, ({ widget }) => {
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
