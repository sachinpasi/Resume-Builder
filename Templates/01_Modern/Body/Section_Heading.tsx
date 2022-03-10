import React from "react";
import { Section_Heading_Type } from "../../../Interfaces/typings";

const Section_Heading = ({ name }: Section_Heading_Type) => {
  return (
    <div className="w-full mb-2">
      <h4 className="text-[13px] font-bold uppercase pl-6 ">{name}</h4>
      <div className="w-full border-b border-black h-0.5"></div>
    </div>
  );
};

export default Section_Heading;
