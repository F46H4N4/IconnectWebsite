import BreadcrumbEight from "@/src/common/breadcrumbs/breadcrumb-mada";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import ProjectArea from "../homes/home/project-area";
import ProjectDetailsArea from "./project-details-area";
import ThumbArea from "./thumb-area";
import Footer from "@/src/layout/footers/footer";
import Portfolio from "@/src/components/project/portfolio";



const ProjectDetails = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight />
            {/* <ThumbArea /> */}
            <ProjectDetailsArea />
            <Portfolio  />

            {/* <ProjectArea /> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
