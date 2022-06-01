import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormInputWidget } from "./DataFormInputWidgetClass";

Scrivito.provideComponent(DataFormInputWidget, ({ widget }) => {
  // @ts-ignore
  const dataItem = Scrivito.useDataItem();

  return (
    <div className="input-group input-group-btn-inside">
      <input
        type={widget.get("type")}
        defaultValue={getValue()}
        className={getClassName()}
        placeholder={widget.get("placeholder")}
        disabled={widget.get("disabled")}
      />
    </div>
  );

  function getValue() {
    const attribute = widget.get("attribute");
    if (attribute) return dataItem?.obj()?.get(attribute);
  }

  function getClassName() {
    let className = "form-control";
    if (widget.get("disabled")) className += " form-control-readonly";

    return className;
  }
});
