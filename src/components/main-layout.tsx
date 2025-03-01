/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rIxoOXoSYOt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

//import agencyBackground from "../assets/login-image.png";
import { Outlet } from "react-router";

/* import Link from "next/link" */

import { ReactNode } from "react";

export default function Component({ children }: { children: ReactNode }) {
  return (
    /* <div className="lg:w-full lg:grid lg:min-h-[100px] lg:grid-cols-2 xl:min-h-[800px] lg:overflow-hidden"> */
    <div className="lg:w-full lg:grid lg:min-h-[100px] lg:overflow-hidden">
      {" "}
      <div className="">
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
