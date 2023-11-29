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
import { Label } from "../ui/label";

const signUpFormSchema = z.object({
  uname: z.string().refine((val) => val.length! > 2, {
    message: "Name too short",
  }),
  email: z.string({ required_error: "Enter this field" }).email(),
  password: z.string().min(8).max(20),
});

type SignUpFormValue = z.infer<typeof signUpFormSchema>;

const defaultValues: Partial<SignUpFormValue> = {
  uname: "",
  email: "",
  password: "",
};

export default function SignUpForm() {
  const form = useForm<SignUpFormValue>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit() {
    console.log(form.getValues("email"));
    console.log(form.getValues("uname"));
    console.log(form.getValues("password"));
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-32"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="uname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="bg-gray-200 "
                  />
                </FormControl>
                <FormMessage className="text-left" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    {...field}
                    className="bg-gray-200 "
                  />
                </FormControl>
                <FormMessage className="text-left" />
              </FormItem>
            )}
          />
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
          <span className="flex items-center gap-2">
            <Input className="w-4" type="checkbox" />
            <p className="text-left text-[14px]">
              By registering, you agree to our{" "}
              <Link className="text-primary" href="">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link className="text-primary" href="">
                Privacy Policy
              </Link>
            </p>
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <Button type="submit">Continue</Button>
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
