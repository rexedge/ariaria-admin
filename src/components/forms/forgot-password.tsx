"use client";
import React from "react";
import { Input } from "../ui/input";
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

const ForgetPasswordFormSchema = z.object({
  email: z.string({ required_error: "Enter this field" }).email(),
  password: z.string().min(8).max(20),
});

type ForgetPasswordFormValue = z.infer<typeof ForgetPasswordFormSchema>;

const defaultValues: Partial<ForgetPasswordFormValue> = {
  email: "",
  password: "",
};

export default function ForgotPasswordForm() {
  const form = useForm<ForgetPasswordFormValue>({
    resolver: zodResolver(ForgetPasswordFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit() {
    console.log(form.getValues("email"));
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
        </div>
        <div className="flex flex-col gap-5">
          <Button type="submit">Proceed</Button>
        </div>
      </form>
    </Form>
  );
}
