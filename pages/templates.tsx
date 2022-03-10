import React from "react";
import Navbar from "../Components/Layout/Navbar/Navbar";
import TemplatesHeader from "../Components/User_Components/TemplatesPage/TemplatesHeader";
import TemplatesList from "../Components/User_Components/TemplatesPage/TemplatesList";

type Props = {};

const Templates = (props: Props) => {
  return (
    <>
      <Navbar />
      <TemplatesHeader />
      <TemplatesList />
    </>
  );
};

export default Templates;
