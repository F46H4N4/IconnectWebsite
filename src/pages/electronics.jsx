import React from "react";
import SEO from "../common/seo";
import Project from "../components/electronics";
import Wrapper from "../layout/wrapper";

const indx = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"iConnect"} />
      <Project />
    </Wrapper>
  );
};

export default indx;
