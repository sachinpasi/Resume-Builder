import React from "react";
import Resume_Left from "./Left_Section/Resume_Left";
import Resume_Right from "./Right_Section/Resume_Right";

type Props = {};

const Resume_Body = (props: Props) => {
  return (
    <div className="w-full flex items-start justify-between gap-8">
      <Resume_Left />
      <Resume_Right />
    </div>
  );
};

export default Resume_Body;
