import { client } from "@/app/appwrite/appwrite";
import { Account, ID } from "appwrite";

export const account = new Account(client);

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

export async function logIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const promise = account.createEmailPasswordSession(email, password);

  promise.then(
    function (response) {
      console.log("logIn: " + response); // Success
      window.location.href = "/";
    },
    function (error) {
      console.log("logIn: " + error); // Failure
    }
  );
}

// export async function getAccount() {
//   const promise = account.get();

//   promise.then(
//     function (response) {
//       console.log(response); // Success
//     },
//     function (error) {
//       console.log(error); // Failure
//     }
//   );
// }
