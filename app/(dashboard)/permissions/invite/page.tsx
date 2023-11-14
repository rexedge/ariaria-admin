import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export default function Invites() {
  return (
    <div className="min-h-screen">
      <div className=" p-6 font-bold ">Permissions</div>

      <form className="flex flex-col gap-7">
        <Input
          className="w-full max-w-md py-2  rounded-lg border bg-transparent placeholder:text-gray-900 p-3 hidden lg:grid"
          placeholder="Full Name"
        />

        <Input
          className="w-full max-w-md py-2  rounded-lg border bg-transparent placeholder:text-gray-900 p-3 hidden lg:grid"
          placeholder="Email Address"
        />
        <Input
          className="w-full max-w-md py-2  rounded-lg border bg-transparent placeholder:text-gray-900 p-3 hidden lg:grid"
          placeholder="Phone Number"
        />

        <Select>
          <SelectTrigger className="w-full max-w-md py-2  rounded-lg border bg-transparent">
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Role</SelectLabel>
              <SelectItem value="apple">Admin</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="rounded-xl mb-8 2xl:mb-16 w-full max-w-md">
          Invite Admin
        </Button>
      </form>
    </div>
  );
}
