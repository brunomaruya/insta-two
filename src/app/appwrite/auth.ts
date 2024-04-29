import { client } from "@/app/appwrite/appwrite";
import { Account, ID } from "appwrite";

const account = new Account(client);

export async function createAccount() {
  const promise = account.create(
    ID.unique(),
    "email@example.com",
    "primeiraSenha",
    "name"
  );
  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
}
