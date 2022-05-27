import * as Scrivito from 'scrivito';

export const UserData = Scrivito.provideObjClass("UserData", {
  attributes: {
    name: "string",
    email: "string",
  },
});
