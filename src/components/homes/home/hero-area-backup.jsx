import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicEffect';

import left_shape from "../../../../public/assets/img/hero/hero-left-shape-3-1.png";
import gradient_bg from "../../../../public/assets/img/hero/hero-gradient-3.jpg";
import img_1 from "../../../../public/assets/img/hero/iconnect_home.png";
import img_2 from "../../../../public/assets/swipe.gif";

const hero_content = {
  title_1: <><span>Most Trusted Digital Partner</span></>,
  info: <><span>Empowering Your Vision, Securing Your Future – Your Most Trusted Digital Partner.</span></>,
};
const { title_1, info } = hero_content;

const HeroArea = () => {
  const tabRef = useRef(null);
  const penRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Text animation
    tl.to(".hero-text-anim i.child-1", {
      y: "0px",
      opacity: 1,
      stagger: 0.3,
      duration: 1,
      delay: 0.5,
    });

    // Bounce effect for img_1 (Tab)
    tl.fromTo(
      tabRef.current,
      { y: 0 },
      {
        y: -30,
        repeat: -1,
        yoyo: true,
        ease: "bounce.out",
        duration: 1.5,
      },
      "-=0.5"
    );

    // Swipe effect for img_2 (Pen)
    tl.fromTo(
      penRef.current,
      { x: -100, opacity: 1 },
      {
        x: 100,
        opacity: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 2,
      },
      "-=1"
    );
  }, []);

  return (
    <>
      <div className="tp-hero-area tp-hero-pt pt-170 pb-70 p-relative">
        <div className="tp-hero-left-shape">
          <Image src={left_shape} alt="Left Shape" />
        </div>
        <div className="tp-hero-gradient-bg">
          <Image src={gradient_bg} alt="Gradient Background" />
        </div>
        <div className="container">
          <div className="row justify-content-center z-index-3">
            <div className="col-xl-11">
              <div className="tp-hero-title-box text-center">
                <h2 className="tp-hero-title-3 hero-text-anim pb-5">
                  <i><i className="child-1">{title_1}</i></i>
                </h2>
                <p className="tp-char-animation-2">{info}</p>
              </div>
              <div className="tp-hero-3-wrapper p-relative">
                <div
                  className="tp-hero-3-main-thumb"
                  ref={tabRef}
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <Image 
                    src={img_1} 
                    alt="Main Display" 
                    className="responsive-image" 
                  />
                </div>
                {/* <div
                  className="tp-hero-3-shape-5"
                  ref={penRef}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image 
                    src={img_2} 
                    alt="Swipe Animation" 
                    className="responsive-image"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .tp-hero-area {
          position: relative;
          overflow: hidden;
        }
        .tp-hero-left-shape img, 
        .tp-hero-gradient-bg img {
          max-width: 100%;
          height: auto;
        }
        .responsive-image {
          width: 100%;
          height: auto;
        }
        @media (max-width: 768px) {
          .tp-hero-title-3 {
            font-size: 24px;
          }
          .tp-char-animation-2 {
            font-size: 14px;
          }
          .tp-hero-3-main-thumb,
          .tp-hero-3-shape-5 {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
};

export default HeroArea;
