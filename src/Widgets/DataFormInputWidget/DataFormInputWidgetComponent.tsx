import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormInputWidget } from "./DataFormInputWidgetClass";

Scrivito.provideComponent(DataFormInputWidget, ({ widget }) => {
  // @ts-ignore
  const dataItem = Scrivito.useDataItem();
  const [value, setValue] = React.useState<string | null>(null);

  return (
    <div className="input-group input-group-btn-inside">
      <input
        name={getAttributeName()}
        type={widget.get("type")}
        defaultValue={getDefaultValue()}
        className={getClassName()}
        placeholder={widget.get("placeholder")}
        disabled={widget.get("disabled")}
      />
    </div>
  );

  function getAttributeName() {
    return widget.get("attribute");
  }

  function getDefaultValue() {
    const attributeName = getAttributeName();
    if (attributeName) return dataItem?.obj()?.get(attributeName);
  }

  function getClassName() {
    let className = "form-control";
    if (widget.get("disabled")) className += " form-control-readonly";

    return className;
  }
});
