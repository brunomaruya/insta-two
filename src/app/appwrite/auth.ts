import { client } from "@/app/appwrite/appwrite";
import { Account, ID } from "appwrite";

const account = new Account(client);

export async function createAccount({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const promise = account.create(ID.unique(), email, password, name);
  promise.then(
    function (response) {
      console.log("createAccount: " + response); // Success
      window.location.href = "/";
    },
    function (error) {
      console.log("createAccount: " + error); // Failure
    }
  );
}
