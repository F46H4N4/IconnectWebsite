import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Connect from "@/src/components/contact/cta-area";
import Footer from "@/src/layout/footers/footer";


const ServiceDetails = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title="Security Solution" innertitle="Help Desk Service Details" />
            <ServiceDetailsArea />
            <TestimonialArea />
            <Connect />
            <Footer />

          </main>
          {/* <FooterFive style_contact={true} style_team={true} bg_style={false} /> */}
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
