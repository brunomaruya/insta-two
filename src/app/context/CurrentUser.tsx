"use client";
import React, { ReactNode, useEffect, useState } from "react";

import { createContext } from "react";
import { account } from "../appwrite/auth";

interface ICurrentUser {
  id?: string;
  email?: string;
  name?: string;
}

export const CurrentUserContext = createContext({} as ICurrentUser);

export default function CurrentUserProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<ICurrentUser>();

  useEffect(() => {
    async function getAccount() {
      const promise = account.get();

      promise.then(
        function (response) {
          console.log(response); // Success
          const data = {
            id: response.$id,
            name: response.name,
            email: response.email,
          };
          setCurrentUser(data);
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    }
    getAccount();
  }, []);

  const value = {
    id: currentUser?.id,
    email: currentUser?.email,
    name: currentUser?.name,
  };

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}
