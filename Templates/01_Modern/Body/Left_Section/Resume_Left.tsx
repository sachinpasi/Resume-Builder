import React from "react";
import Education from "./Education";
import Work_Experience from "./Work_Experience";

type Props = {};

const Resume_Left = (props: Props) => {
  return (
    <div className="w-2/4 h-full">
      <Education />
      <Work_Experience />
    </div>
  );
};

export default Resume_Left;
