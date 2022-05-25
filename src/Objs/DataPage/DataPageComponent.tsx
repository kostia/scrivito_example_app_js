import * as React from "react";
import * as Scrivito from "scrivito";

import { DataPage } from "./DataPageObjClass";

Scrivito.provideComponent(DataPage, ({ page }) => (
  <Scrivito.ContentTag content={page} attribute="template" />
));
