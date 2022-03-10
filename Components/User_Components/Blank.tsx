import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const Blank = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.push("/templates");
  }, []);
  return <div></div>;
};

export default Blank;
