import * as React from "react";
import * as Scrivito from "scrivito";

import { DataPage } from "./DataPageObjClass";

Scrivito.provideComponent(DataPage, ({ page }) => (
  <>
    <div className="header-pretitle">{page.get("title")}</div>
    <Scrivito.ContentTag content={page} attribute="template" />
  </>
));
