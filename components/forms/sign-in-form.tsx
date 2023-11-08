'use client';
import React from 'react';
import { Input } from '../ui/input';
import PasswordField from '../layout/passwordField';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const signInFormSchema = z.object({
	email: z.string({ required_error: 'Enter this field' }).email(),
	password: z.string().min(8).max(20),
});

type SignInFormValue = z.infer<typeof signInFormSchema>;

const defaultValues: Partial<SignInFormValue> = {
	email: '',
	password: '',
};

export default function SignInForm() {
	const form = useForm<SignInFormValue>({
		resolver: zodResolver(signInFormSchema),
		defaultValues,
		mode: 'onChange',
	});

	async function onSubmit() {
		console.log(form.getValues('email'));
		console.log(form.getValues('password'));
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
          <p className="text-[14px]">
            Forgot Password?{" "}
            <Link className="text-primary" href="">
              Reset
            </Link>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Button type="submit">Sign in</Button>
          <p className="text-[14px]">
            Are you new here?{" "}
            <Link className="text-primary" href="">
              Sign up
            </Link>{" "}
          </p>
        </div>
      </form>
    </Form>
  );
}
