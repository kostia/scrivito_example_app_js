import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormWidget } from "./DataFormWidgetClass";

Scrivito.provideComponent(DataFormWidget, ({ widget }) => (
  <Scrivito.ContentTag tag="form" content={widget} attribute="template" />
));
