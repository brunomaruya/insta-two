import React from "react";

interface IUser {
  params: {
    user: string;
  };
}

export default function page({ params }: IUser) {
  return <div>User: {params.user}</div>;
}
