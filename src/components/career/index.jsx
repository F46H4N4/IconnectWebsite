import FooterFive from "@/src/layout/footers/footer-5";
import Footer from "@/src/layout/footers/footer";

import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb-10";
// import ContactFormArea from ".@/src/components/contact/contact-form-area";
import ContactInner from "./career-inner";
import CarrerBanner  from "@/src/components/career/carrer-banner";
import Openings  from "@/src/components/about/job-area";
import Connect from "@/src/components/contact/cta-area";

// import CtaArea from "./cta-area";
import HeroBanner from "../../common/hero-banner";
// import OfficeLocation from "./office-location";

// import ContactInner from "@/src/components/contact/contact-inner";


const Career = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb/>
            {/* <HeroBanner bg_img="/assets/img/career/thirdbg2.jpg" style={{ background: 'white' }} /> */}
            <ContactInner/>
            <CarrerBanner style={{ background : 'white' }}/>
            <Openings style={{ background : 'white' }} />
            <Connect />

            {/* <OfficeLocation /> */}
            {/* <ContactFormArea /> */}
            {/* <ContactInner />
            <CtaArea /> */}
          </main>
      <Footer />
        </div>
      </div>
    </>
  );
};

export default Career;


