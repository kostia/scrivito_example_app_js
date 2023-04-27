import * as Scrivito from "scrivito";

export const CurrentUser = Scrivito.provideDataItem(
  "CurrentUser",
  async () => ({
    email: "alice@example.com",
    role: "user",
  })
);
