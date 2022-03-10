import Image from "next/image";
import Link from "next/link";
import React from "react";

import { TemplatesData } from "../../../Utils/data";

type Props = {};

const TemplatesList = (props: Props) => {
  return (
    <section className="w-full">
      <div className="container">
        <div className="w-3/4 grid grid-cols-4 gap-4">
          {TemplatesData.map(({ id, imgSrc, name }) => (
            <Link key={id} href={`/editor/${id}`}>
              <a className="w-full group h-96 ">
                <div className="h-80  relative rounded-md shadow-md group-hover:scale-105 transition-all cursor-pointer ">
                  <Image
                    src={imgSrc}
                    alt=""
                    objectFit="contain"
                    layout="fill"
                  />
                </div>
                <div className="w-full h-16 ">
                  <h5 className=" text-lg font-semibold text-center py-4">
                    {name}
                  </h5>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesList;
