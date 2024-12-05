import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";
import shape_4 from "../../../public/assets/img/service/app.png";

const BreadcrumbTwo = ({ title, innertitle, team_details, career_details }) => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    textRef.current.classList.add("tp-slide-text");
    imgRef.current.classList.add("tp-slide-image");
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideInText {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInImage {
          from {
            transform: translateX(-50%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .tp-slide-text {
          animation: slideInText 0.8s ease-out forwards;
        }

        .tp-slide-image {
          animation: slideInImage 0.8s ease-out forwards;
        }

        .breadcrumb__sub-img {
          position: relative;
          margin-left: 90px; /* Increased margin for better positioning */
          width: 350px; /* Slightly larger width */
          height: auto;
          transform: translateX(40px); /* Move image more to the right */
          z-index: 10; /* Ensure image is above other elements */
        }

        /* Responsive adjustments */
        @media (max-width: 1400px) {
          .breadcrumb__sub-img {
            margin-left: 60px;
            width: 300px;
            transform: translateX(30px);
          }
        }

        @media (max-width: 1200px) {
          .breadcrumb__sub-img {
            margin-left: 40px;
            width: 250px;
            transform: translateX(20px);
          }
        }

        @media (max-width: 992px) {
          .breadcrumb__sub-img {
            margin-left: 20px;
            width: 220px;
            transform: translateX(10px);
          }
        }

        @media (max-width: 768px) {
          .breadcrumb__sub-img {
            margin-left: 10px;
            width: 200px;
            transform: translateX(5px);
          }
        }

        @media (max-width: 576px) {
          .breadcrumb__sub-img {
            margin-left: 0;
            width: 180px;
            transform: translateX(0);
          }
        }
      `}</style>

      <div
        className="breadcrumb__area breadcrumb-height p-relative servicebg"
        style={{ backgroundColor: "#CE883D"  }}
      >
        <div className="breadcrumb__shape-1">
          <Image src={shape_1} alt="theme-pure" />
        </div>
        <div className="breadcrumb__shape-2">
          <Image src={shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-xl-8 col-lg-7">
              <div className="breadcrumb__content">
                <h3 ref={textRef} className="breadcrumb__title">
                  {title}
                </h3>
                <div className="breadcrumb__list">
                  <span className="child-one">
                    <Link href="/">Home</Link>
                  </span>
                  <span className="dvdr">
                    <i className="fal fa-angle-right"></i>
                  </span>
                  <span
                    className={`${team_details && "child-one"} ${
                      career_details && "child-one"
                    }`}
                  >
                    {innertitle}
                  </span>
                  {team_details && (
                    <>
                      <span className="dvdr">
                        <i className="fal fa-angle-right"></i>
                      </span>
                      <span>Imdat Cimsit</span>
                    </>
                  )}
                  {career_details && (
                    <>
                      <span className="dvdr">
                        <i className="fal fa-angle-right"></i>
                      </span>
                      <span>Team Member</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-xl-4 col-lg-5 text-center text-md-end">
              <div className="breadcrumb__img p-relative text-start z-index">
                <div ref={imgRef} className="breadcrumb__sub-img">
                  <Image
                    src={shape_4}
                    alt="theme-pure"
                    style={{ 
                      width: "310px", 
                      height: "181px",
                      objectFit: "contain"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbTwo;