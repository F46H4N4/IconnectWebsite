import BreadcrumbSeven from "@/src/common/breadcrumbs/breadcrumb-7";
import Footer from "@/src/layout/footers/footer";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";

const Project = () => {
  return (
    <>
      <HeaderSix />
      <main>
        <BreadcrumbSeven />
        <Portfolio />
        <CtaArea />
      </main>
      <Footer/>
    </>
  );
};

export default Project;
