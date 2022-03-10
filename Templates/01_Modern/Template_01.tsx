import React from "react";
import { Edit_Header_Modal_Type } from "../../Interfaces/typings";
import Resume_Body from "./Body/Resume_Body";
import Resume_Header from "./Header/Resume_Header";

const Template_01 = ({
  isHeaderEditModalOpen,
  setisHeaderEditModalOpen,
}: Edit_Header_Modal_Type) => {
  return (
    <div className="w-full h-full bg-white">
      <Resume_Header setisHeaderEditModalOpen={setisHeaderEditModalOpen} />
      <Resume_Body />
    </div>
  );
};

export default Template_01;
