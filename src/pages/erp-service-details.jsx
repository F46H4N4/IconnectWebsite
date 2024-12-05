import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/erp-service-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"iConnect"} />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
