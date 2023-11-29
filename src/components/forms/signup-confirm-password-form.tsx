"use client";
import React from "react";
import { Input } from "../ui/input";
import PasswordField from "../layout/passwordField";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpConfirmPasswordFormSchema = z
  .object({
    password: z.string().min(8).max(20),
    cpassword: z.string(),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords are not similar",
    path: ["cpassword"],
  });

type SignUpConfirmPasswordFormValue = z.infer<
  typeof SignUpConfirmPasswordFormSchema
>;

const defaultValues: Partial<SignUpConfirmPasswordFormValue> = {
  password: "",
  cpassword: "",
};

export default function SignUpConfirmPasswordForm() {
  const form = useForm<SignUpConfirmPasswordFormValue>({
    resolver: zodResolver(SignUpConfirmPasswordFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit() {
    console.log(form.getValues("password"));
    console.log(form.getValues("cpassword"));
  }

  return (
    <Form {...form}>
      <form
        className="flex mt-[20px] flex-col gap-32"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordField
                    {...field}
                    placeholder="Password"
                    className="bg-gray-200 "
                  />
                </FormControl>
                <FormMessage className="text-left" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cpassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordField
                    {...field}
                    placeholder="Confirm Password"
                    className="bg-gray-200 "
                  />
                </FormControl>
                <FormMessage className="text-left" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex pb-[30px] flex-col gap-5">
          <Button type="submit">Reset Password</Button>
          <p className="text-[14px]">
            Already have an account?{" "}
            <Link className="text-primary" href="">
              Sign in
            </Link>{" "}
          </p>
        </div>
      </form>
    </Form>
  );
}
