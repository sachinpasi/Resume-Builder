import React from "react";

type Props = {};

const Details_Border = (props: Props) => {
  return (
    <>
      <div className="top-[1px] left-[1px] border-t-[1px] border-l-[1px] w-2 h-[calc(100%-2px)] absolute border-solid border-editor-text"></div>
      <div className="top-[1px] right-[1px] border-t-[1px] border-r-[1px] w-2  absolute border-solid border-editor-text"></div>
      <div className="bottom-[1px] left-[1px] border-b-[1px] border-l-[1px] w-2  absolute border-solid border-editor-text"></div>
      <div className="bottom-[1px] right-[1px] border-b-[1px] border-r-[1px] w-2 h-[calc(100%-2px)] absolute border-solid border-editor-text"></div>
    </>
  );
};

export default Details_Border;
