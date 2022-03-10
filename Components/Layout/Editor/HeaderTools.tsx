import React from "react";
import { BsDownload } from "react-icons/bs";

const HeaderTools = ({ ExportPDF }: any) => {
  return (
    <div className=" h-12 rounded-full bg-theme-black-light flex items-center justify-end px-1.5">
      <button
        onClick={ExportPDF}
        className=" h-10 rounded-full bg-[#1AB385] flex items-center justify-center px-4 space-x-3 hover:scale-95 transition-transform cursor-pointer"
      >
        <BsDownload className="text-white text-xl" />
        <p className="text-white  tracking-wide text-xl -mt-0.5">Download</p>
      </button>
    </div>
  );
};

export default HeaderTools;
