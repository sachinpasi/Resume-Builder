import React from "react";
import Interest from "./Interest";
import Projects from "./Projects";
import Skills from "./Skills";

type Props = {};

const Resume_Right = (props: Props) => {
  return (
    <div className="w-2/4 h-full">
      <Skills />
      <Projects />
      <Interest />
    </div>
  );
};

export default Resume_Right;
