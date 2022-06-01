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
    private readonly map = new Map<number, DataFormCallbacks>()
  ) {}

  register(callbacks: DataFormCallbacks): UnregisterCallback {
    const id = this.getNextId();
    this.map.set(id, callbacks);

    return () => {
      this.map.delete(id);
    };
  }

  submit(): void {
    this.map.forEach(({ onSubmit }) => onSubmit());
  }

  clear(): void {
    this.map.forEach(({ onCancel }) => onCancel());
  }

  private getNextId() {
    this.currentId += 1;
    return this.currentId;
  }
}

interface DataFormCallbacks {
  onSubmit: DataFormCallback;
  onCancel: DataFormCallback;
}

type DataFormCallback = () => void;

interface CallbackPool {
  [id: number]: DataFormCallback;
}

type UnregisterCallback = () => void;

export const DataFormContext = React.createContext<DataForm | undefined>(
  undefined
);
