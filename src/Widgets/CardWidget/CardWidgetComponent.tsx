import * as React from "react";
import * as Scrivito from "scrivito";

import { CardWidget } from "./CardWidgetClass";

Scrivito.provideComponent(CardWidget, ({ widget }) => (
  <div className="card">
    <div className="card-body fade show active">
      <Scrivito.ContentTag content={widget} attribute="template" />
    </div>
  </div>
));
