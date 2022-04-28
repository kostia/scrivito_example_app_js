import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("DataPage", ({ page }) => (
  <Scrivito.ContentTag content={page} attribute="template" />
));
