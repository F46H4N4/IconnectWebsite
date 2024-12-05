import React from "react";
import SEO from "../common/seo";
import ProjectDetails from "../components/booking-amiyon-project-details";
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
