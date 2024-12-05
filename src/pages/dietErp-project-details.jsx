import React from "react";
import SEO from "../common/seo";
import ProjectDetails from "../components/dietErp-project-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"iConnect"} />
      <ProjectDetails />
    </Wrapper>
  );
};

export default index;
