import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavigationLinks } from "../../../Utils/data";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="w-full h-20 ">
      <div className="container h-full flex justify-between items-center ">
        <div className="flex items-center h-full">
          <Link href="/">
            <a className="relative w-52 h-full">
              <Image
                src="/assets/logo.svg"
                layout="fill"
                alt="logo"
                objectFit="contain"
              />
            </a>
          </Link>

          <div className="flex items-center space-x-6 mx-10">
            {NavigationLinks.map(({ name, href }) => (
              <NavLink key={name} name={name} href={href} />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center space-x-6">
          <NavLink href="/auth/login" name="Login" />
          <Link href="/templates">
            <a
              style={{ transition: "all 0.3s ease" }}
              className="bg-black bg-opacity-10 h-10 px-5 tracking-wide text-lg inline-flex items-center justify-center rounded-md font-medium hover:bg-opacity-20  "
            >
              Create Resume
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
