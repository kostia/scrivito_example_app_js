import * as Scrivito from "scrivito";

import { CurrentUser } from "./CurrentUserDataItem";

Scrivito.provideEditingConfig(CurrentUser, {
  title: "Current User",
});
