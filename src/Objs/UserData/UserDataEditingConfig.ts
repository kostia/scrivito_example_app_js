import * as Scrivito from "scrivito";

import { UserData } from "./UserDataObjClass";

Scrivito.provideEditingConfig(UserData, {
  title: "User",
  description: "Represents an IAM user",

  titleForContent(user) {
    return user.get("name");
  },

  attributes: {
    name: {
      title: "Name",
    },

    email: {
      title: "Email",
    },
  },

  properties: ["name", "email"],

  validations: [
    [
      "name",
      (name) => {
        if (!name) return "A user must have a name";
      },
    ],

    [
      "email",
      (email) => {
        if (!email) return "A user must have an email";

        // FIXME: Remove the string cast once fixed in the SDK
        if (UserData.where("email", "equals", email as string).count() > 1) {
          return `Duplicate user email: "${email}". User emails must be unique.`;
        }
      },
    ],
  ],
});
