"use client";
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SignUpVerificationForm() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      otp[index] = value;
      setOtp([...otp]);

      if (value && index < otp.length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleBackspace = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <form className="flex flex-col gap-5">
      <div className="flex justify-center gap-3 lg:px-[90px] mt-[30px]">
        {otp.map((digit, index) => (
          <Input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={(e) => handleBackspace(e, index)}
            ref={inputRefs[index]}
            maxLength={1}
            className="h-[60px] text-[20px] font-bold text-center w-[60px]"
          />
        ))}
      </div>
      <p className="text-left text-[14px] px-[65px]">
        Did not recieve code?{" "}
        <Link className="text-primary" href="">
          Resend
        </Link>
      </p>
      <div className="flex pb-[30px] mt-[100px] flex-col gap-5">
        <Button type="submit">Proceed</Button>
      </div>
    </form>
  );
}
