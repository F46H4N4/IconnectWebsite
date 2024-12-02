import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import Brwoser from '@/src/common/brwoser';
import BounceLine from '@/src/svg/bounce-line';

import left_shape from "../../../../public/assets/img/hero/hero-left-shape-3-1.png" ;
import gradient_bg from "../../../../public/assets/img/hero/hero-gradient-3.jpg" ;
import img_1 from "../../../../public/assets/img/hero/iconnect_home.png";
import img_2 from "../../../../public/assets/swipe.gif" ;
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicEffect';

const hero_content = { 
   title_1: <><span>Most Trusted Digital Partner</span></>,
   // title_2: "Relationships Start Here.",
   info: <>Softec provides all customer management service within one software. <br /> Our landing works on all devices.</>,
   btn_1: "Live Damo",
   btn_2: "Try it on Browser",
   
}
const { title_1, title_2, info, btn_1, btn_2 } = hero_content




const HeroArea = () => {

   const tabRef = useRef(null);
  const penRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Create a timeline for animations
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
      "-=0.5" // Start slightly overlapping with text animation
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
      "-=1" // Start overlapping with bounce effect
    );
  }, []);


   let info_anim = useRef(null)

   useIsomorphicLayoutEffect(() => {
      let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
      tl.to(".hero-text-anim i.child-1", { y: "0px", duration: 1, opacity: 1, stagger: 0.3, delay: .5 });
   }, [])

   return (
      <>
         <div className="tp-hero-area tp-hero-pt pt-170 pb-70 p-relative">
            <div className="tp-hero-left-shape">
               <Image src={left_shape} alt="them-pure" />
            </div>
            <div className="tp-hero-gradient-bg">
               <Image src={gradient_bg} alt="them-pure" />
            </div>
            <div className="container">
               <div className="row justify-content-center z-index-3">
                  <div className="col-xl-11">
                     <div className="tp-hero-title-box text-center">
                        <h2 className="tp-hero-title-3 hero-text-anim pb-5">
                           <i><i className="child-1">{title_1}</i></i>
                           {/* <i><i className="child-1">{title_2}</i></i> */}
                        </h2>
                        <p className="tp-char-animation-2 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">{info}</p>
                     </div>
                     {/* <div className="tp-hero-btn-3 text-center wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".9s">
                        <Link className="tp-btn-blue-lg tp-btn-hover alt-color-black" href="#">
                           <span>{btn_1}</span>
                           <b></b>
                        </Link>
                        <Link className="tp-btn-border tp-btn-hover alt-color-black" href="#">
                           <span>{btn_2}</span>
                           <b></b>
                        </Link>
                     </div> */}
                     {/* <div className="tp-hero-browser-wrapper d-flex align-items-center justify-content-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                        <Brwoser />
                     </div> */}
                     {/* <div className="tp-hero-3-wrapper p-relative">
                        <div className="tp-hero-3-border-wrap d-none d-md-block">
                           <span className="redius-shape-1"></span>
                           <span className="redius-shape-2"></span>
                           <span className="redius-shape-3"></span>
                        </div>
                        <div className="tp-hero-3-main-thumb z-index-5 wow frist-img animated">
                           <Image src={img_1} alt="them-pure" style={{ width: "967px", height: "592px" }} />
                        </div>
                        <div className="tp-hero-3-shape-5 d-none d-lg-block wow frist-img animated">
                           <Image src={img_2} alt="them-pure" />
                        </div>
                        <div className="tp-hero-3-shape-6 d-none d-lg-block">
                           <span> <BounceLine /> </span>
                        </div>
                     </div> */}
                  <div className="tp-hero-3-wrapper p-relative" style={{ paddingTop:"-5px" }}>
                     <div
                        className="tp-hero-3-main-thumb"
                        ref={tabRef}
                        style={{ position: "relative", zIndex: 1 }}
                     >
                        <Image src={img_1} alt="tab" style={{ width: "977px", height: "602px" }} />
                     </div>
                     <div
                        className="tp-hero-3-shape-5"
                        ref={penRef}
                        style={{
                           position: "absolute",
                           top: "50%",
                           left: "50%",
                           transform: "translate(-50%, -50%)",
                           zIndex: 2, // Ensure higher layer
                           mixBlendMode: "normal", // Prevent blending
                        }}
                     >
                        <Image src={img_2} alt="pen" style={{ opacity: 1 }} />
                     </div>
                  </div>

                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HeroArea;