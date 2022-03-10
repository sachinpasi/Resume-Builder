import React from "react";
import { Edit_Header_Modal_Type } from "../../../Interfaces/typings";
import Header_Main from "./Header_Main/Header_Main";
import Header_Summary from "./Header_Summary/Header_Summary";

const Resume_Header = ({
  setisHeaderEditModalOpen,
}: Edit_Header_Modal_Type) => {
  return (
    <div className="w-full pt-5 px-6 ">
      <Header_Main setisHeaderEditModalOpen={setisHeaderEditModalOpen} />
      <Header_Summary />
    </div>
  );
};

export default Resume_Header;
