import Link from "next/link";
import React from "react";
import { NavLink } from "../../../Interfaces/typings";

const NavLink = ({ href, name }: NavLink) => {
  return (
    <Link href={href} key={name}>
      <a className="text-lg tracking-wide animated-underline animated-underline-black text-theme-black-light">
        {name}
      </a>
    </Link>
  );
};

export default NavLink;
