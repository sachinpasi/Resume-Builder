import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/User_Components/HomePage/Banner";

type Props = {};

const Index = (props: Props) => {
  return (
    <div className="font-ui">
      <Layout>
        <Banner />
      </Layout>
    </div>
  );
};

export default Index;
