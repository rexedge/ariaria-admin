import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Invites from "./invite/page";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteIcon } from "lucide-react";

const active = "text-green-600";
const inactive = "text-gray-500 ";
const invited = "text-blue-700 ";

const invoices = [
  {
    name: "Jeff Aligwekwe",
    emailAddress: "ope@gmail.com",
    phoneNumber: "+2348175451000",
    role: "Admin",
    status: "inactive",
  },
  {
    name: "Opeyemi Grace",
    emailAddress: "ope@gmail.com",
    phoneNumber: "+2348175451000",
    role: "Admin",
    status: "active",
  },
  {
    name: "Opeyemi Grace",
    emailAddress: "ope@gmail.com",
    phoneNumber: "+2348175451000",
    role: "Admin",
    status: "invited",
  },
  {
    name: "Opeyemi Grace",
    emailAddress: "ope@gmail.com",
    phoneNumber: "+2348175451000",
    role: "Admin",
    status: "active",
  },
  {
    name: "Opeyemi Grace",
    emailAddress: "ope@gmail.com",
    phoneNumber: "+2348175451000",
    role: "Admin",
    status: "active",
  },
  {
    name: "Opeyemi Grace",
    emailAddress: "ope@gmail.com",
    phoneNumber: "+2348175451000",
    role: "Admin",
    status: "active",
  },
  {
    name: "Opeyemi Grace",
    emailAddress: "ope@gmail.com",
    phoneNumber: "+2348175451000",
    role: "Admin",
    status: "active",
  },
];

export default function Permissions() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="font-bold"> Permissions</div>
        <Button className="rounded-xl mb-8 2xl:mb-16 " asChild>
          <Link href={"/permissions/invite"}> Invite Admin</Link>
        </Button>
      </div>
      <div className="">
        <Table>
          <TableCaption>A list of your recent </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Email Address</TableHead>
              <TableHead>Phone Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, key) => (
              <TableRow key={key}>
                <TableCell className="font-medium">{invoice.name}</TableCell>
                <TableCell>{invoice.emailAddress}</TableCell>
                <TableCell>{invoice.phoneNumber}</TableCell>
                <TableCell>{invoice.role}</TableCell>
                <TableCell
                  className={`${
                    invoice.status === "active"
                      ? active
                      : invoice.status === "invited"
                      ? invited
                      : inactive
                  }`}
                >
                  {invoice.status}
                </TableCell>
                <TableCell>
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
