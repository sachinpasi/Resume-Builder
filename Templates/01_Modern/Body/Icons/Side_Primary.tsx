import React from "react";

const Side_Primary = ({ isLastElement }: any) => {
  return (
    <div className="absolute h-full w-[1px] top-1  bg-editor-text">
      <div className="w-[10px] h-[10px] -top-1 -left-[4.2px] absolute rounded-full bg-white border-solid border-[2px] border-editor-text"></div>
      {isLastElement && (
        <div className="w-[10px] h-[10px] -bottom-1 -left-[4.2px] absolute rounded-full bg-white border-solid border-[2px] border-editor-text"></div>
      )}
    </div>
  );
};

export default Side_Primary;
