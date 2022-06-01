import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormInputWidget } from "./DataFormInputWidgetClass";
import { DataFormContext } from "../DataFormWidget/DataFormWidgetComponent";

Scrivito.provideComponent(DataFormInputWidget, ({ widget }) => {
  const dataForm = React.useContext(DataFormContext);

  const [valueToBeSaved, setValueToBeSaved] = React.useState<string | null>(
    null
  );

  React.useEffect(
    () =>
      dataForm?.register({
        onSubmit,
        onCancel,
      }),
    [valueToBeSaved]
  );

  // @ts-ignore
  const dataItem = Scrivito.useDataItem();

  return (
    <div className="input-group input-group-btn-inside">
      <input
        type={widget.get("type")}
        value={valueToBeSaved || valueFromDataItem()}
        className={getClassName()}
        placeholder={widget.get("placeholder")}
        disabled={widget.get("disabled")}
        onChange={onChange}
      />
    </div>
  );

  function getClassName() {
    let className = "form-control";
    if (widget.get("disabled")) className += " form-control-readonly";

    return className;
  }

  function valueFromDataItem() {
    const attribute = widget.get("attribute");
    if (attribute) return dataItem?.obj()?.get(attribute);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    e.stopPropagation();

    setValueToBeSaved(e.target.value);
  }

  async function onSubmit() {
    const attribute = widget.get("attribute");
    const obj = dataItem?.obj();

    if (attribute && obj && valueToBeSaved !== null) {
      obj.update({ [attribute]: valueToBeSaved });
      await obj.finishSaving();

      setValueToBeSaved(null);
    }
  }

  function onCancel() {
    setValueToBeSaved(null);
  }
});
