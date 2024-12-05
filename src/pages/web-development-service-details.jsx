import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/web-development-service-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Amiyon"} />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
