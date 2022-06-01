import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormWidget } from "./DataFormWidgetClass";

Scrivito.provideComponent(DataFormWidget, ({ widget }) => {
  return (
    <DataFormContext.Provider value={new DataForm()}>
      <Scrivito.ContentTag tag="form" content={widget} attribute="template" />
    </DataFormContext.Provider>
  );
});

class DataForm {
  constructor(
    private currentId = 0,
    private readonly map = new Map<number, OnSubmitCallback>()
  ) {}

  register(callback: OnSubmitCallback): UnregisterCallback {
    const id = this.getNextId();
    this.map.set(id, callback);

    return () => {
      this.map.delete(id);
    };
  }

  submit(): void {
    this.map.forEach((callback) => callback());
  }

  private getNextId() {
    this.currentId += 1;
    return this.currentId;
  }
}

type OnSubmitCallback = () => void;

interface CallbackPool {
  [id: number]: OnSubmitCallback;
}

type UnregisterCallback = () => void;

export const DataFormContext = React.createContext<DataForm | undefined>(
  undefined
);
