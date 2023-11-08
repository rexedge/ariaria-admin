import Image from "next/image";
import React, { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col ">
      <div className=" h-screen ">
        <Image
          className="h-full object-cover w-1/2"
          src="/africanPattern2.png"
          height={1080}
          width={1080}
          alt=""
        />
      </div>
      <div className="fixed backdrop-blur-lg top-1/2 left-1/2 w-[550px] py-10 px-5 bg-white/70 border -translate-x-1/2 -translate-y-1/2 rounded-3xl ">
        <Image
          className="flex py-6 mx-auto   "
          src="/logo.png"
          height={90}
          width={90}
          alt=""
        />
        {children}
      </div>
    </div>
  );
}
