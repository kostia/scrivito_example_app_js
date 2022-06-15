import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormInputWidget } from "./DataFormInputWidgetClass";
import { DataFormContext } from "../DataFormWidget/DataFormWidgetComponent";

Scrivito.provideComponent(DataFormInputWidget, ({ widget }) => {
  // @ts-ignore
  const dataItem = Scrivito.useDataItem();
  const [value, setValue] = React.useState<string | null>(null);
  const { isEditing, setIsEditing } = React.useContext(DataFormContext);

  const attributeName = getAttributeName();

  return (
    <div className="col-md-8">
      <Label widget={widget} />
      <div className="input-group input-group-btn-inside">
        {widget.get("type") === "textarea" ? (
          <textarea
            name={attributeName}
            defaultValue={getDefaultValue()}
            id={attributeName}
            className={getClassName()}
            placeholder={widget.get("placeholder")}
            disabled={isDisabled()}
          />
        ) : (
          <input
            name={attributeName}
            type={widget.get("type")}
            defaultValue={getDefaultValue()}
            id={attributeName}
            className={getClassName()}
            placeholder={widget.get("placeholder")}
            disabled={isDisabled()}
          />
        )}
        <button type="button" className="btn btn-addon" onClick={onToggle}>
          <i className={getIconClassName()} />
        </button>
      </div>
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
    if (isDisabled()) className += " form-control-readonly";

    return className;
  }

  function getIconClassName() {
    let className = "jr-icon jr-icon-pen";
    if (isEditing) className += " text-orange";

    return className;
  }

  function isDisabled() {
    return widget.get("disabled") || !isEditing;
  }

  function onToggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    setIsEditing(!isEditing);
  }
});

const Label = Scrivito.connect(({ widget }: { widget: Scrivito.Widget }) => {
  if (widget.get("hideLabel")) return null;

  return (
    <label htmlFor={widget.get("attribute") as string} className="form-label">
      <span>{widget.get("title")}</span>
    </label>
  );
});
