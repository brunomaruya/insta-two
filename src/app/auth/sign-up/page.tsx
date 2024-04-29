"use client";
import React from "react";
import { createAccount } from "../../appwrite/auth";
import { Input } from "@nextui-org/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../zod";
type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function signUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(UserSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => createAccount(data);
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <form
        className="w-96 flex flex-col gap-3 border-text border p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="logo text-center mb-10">InstaTwo</h1>
        <Input
          label="Name"
          isInvalid={errors.name ? true : false}
          errorMessage={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Email"
          isInvalid={errors.email ? true : false}
          errorMessage={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Password"
          isInvalid={errors.password ? true : false}
          errorMessage={errors.password?.message}
          {...register("password")}
        />
        <Input
          label="Confirm Password"
          isInvalid={errors.password ? true : false}
          errorMessage={errors.password?.message}
          {...register("confirmPassword")}
        />
        <Button type="submit" className="bg-primary">
          Sign up
        </Button>

        <p>
          Have an Account?
          <span className="text-primary">
            <Link href="/auth/sign-in"> Sign in</Link>
          </span>
        </p>
      </form>
      {/* <button onClick={() => createAccount()}>Create</button> */}
    </div>
  );
}
