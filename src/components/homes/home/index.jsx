import ScrollToTop from "@/src/hooks/scroll-to-top";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "../../../common/about-area";
import AboutAreaOne from "../../../common/about-area-one";
import AboutAreaTwo from "../../../common/about-area-two";
import Feedbacks from "../../../common/testimonial-area";

import FeatureArea from "./feature-area";
import PriceArea from "./price-area";
import ProjectArea from "./project-area";
import RankArea from "./rank-area";
import ServicesArea from "./services-area";
import TestimonialArea from "./testimonial-area";
import HeroArea from "./hero-area-backup";
import HeaderThree from "@/src/layout/headers/header-3";
import BlogGrid from "@/src/components/blog/blog-grid";
import CtaArea from "./cta-area";
import ServiceArea from "@/src/components/service/service-area";
import Portfolio from "@/src/components/project/portfolio";
import ClientSections from "@/src/layout/footers/footer-3";



const HomeOne = () => {
  return (
    <>
      <HeaderThree />
      <HeroArea />
      <AboutArea />
      <ServicesArea />
      <CtaArea />
      <Portfolio />
      <ClientSections />
      <AboutAreaOne />
      <AboutAreaTwo />
       <Feedbacks/>
      {/* <ServiceArea/> */}

      {/* <BlogGrid /> */}
      {/* <FeatureArea />
      <ProjectArea />
      <TestimonialArea />
      <RankArea />
      <PriceArea /> */}
    
      <Footer />
      <ScrollToTop />
      
    </>
  );
};

export default HomeOne;
