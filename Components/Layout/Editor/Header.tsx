import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderTools from "./HeaderTools";

type Props = {};

const Header = ({ ExportPDF }: any) => {
  return (
    <header className="w-full h-14">
      <div className="container flex items-center justify-between h-full">
        <Link href="/">
          <a className="relative w-52 h-12">
            <Image
              src="/assets/logowhite.svg"
              objectFit="contain"
              layout="fill"
              alt="logo"
            />
          </a>
        </Link>
        <HeaderTools ExportPDF={ExportPDF} />
      </div>
    </header>
  );
};

export default Header;
