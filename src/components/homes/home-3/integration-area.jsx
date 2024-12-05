import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

// import slider_img_1_1 from "../../../../public/assets/img/integration/integration-1.png";
// import slider_img_1_2 from "../../../../public/assets/img/logo/two.png";
// import slider_img_1_3 from "../../../../public/assets/img/logo/three.png";
// import slider_img_1_4 from "../../../../public/assets/img/logo/four.png";
// slider img import here
import slider_img_1_1 from "../../../../public/assets/img/logo/one.png";
import slider_img_1_2 from "../../../../public/assets/img/logo/two.png";
import slider_img_1_3 from "../../../../public/assets/img/logo/three.png";
import slider_img_1_4 from "../../../../public/assets/img/logo/four.png";
import slider_img_2_1 from "../../../../public/assets/img/logo/five.png";
import slider_img_2_2 from "../../../../public/assets/img/logo/six.png";
import slider_img_2_3 from "../../../../public/assets/img/logo/seven.png";
import slider_img_2_4 from "../../../../public/assets/img/logo/eight.png";
import slider_img_1_5 from "../../../../public/assets/img/logo/nine.png";
import slider_img_1_6 from "../../../../public/assets/img/logo/ten.png";
import slider_img_1_7 from "../../../../public/assets/img/logo/eleven.png";
import slider_img_1_8 from "../../../../public/assets/img/logo/twelve.png";
import slider_img_2_5 from "../../../../public/assets/img/logo/thirteen.png";
import slider_img_2_6 from "../../../../public/assets/img/logo/fourteen.png";
import slider_img_2_7 from "../../../../public/assets/img/logo/fifteen.png";
import slider_img_2_8 from "../../../../public/assets/img/logo/sixteen.png";
import slider_img_1_9 from "../../../../public/assets/img/logo/seventeen.png";
import slider_img_1_10 from "../../../../public/assets/img/logo/eighteen.png";
import slider_img_1_11 from "../../../../public/assets/img/logo/nineteen.png";
import slider_img_1_12 from "../../../../public/assets/img/logo/twenty.png";
import slider_img_2_9 from "../../../../public/assets/img/logo/twentyone.png";
import slider_img_2_10 from "../../../../public/assets/img/logo/twentytwo.png";
import slider_img_2_11 from "../../../../public/assets/img/logo/twentythree.png";
import slider_img_2_12 from "../../../../public/assets/img/logo/twentyfour.png";
import slider_img_1_13 from "../../../../public/assets/img/logo/twentyfive.png";
import slider_img_1_14 from "../../../../public/assets/img/logo/twentysix.png";
import slider_img_1_15 from "../../../../public/assets/img/logo/twentyseven.png";
import slider_img_1_16 from "../../../../public/assets/img/logo/twentyeight.png";
import slider_img_2_13 from "../../../../public/assets/img/logo/twentynine.png";
import slider_img_2_14 from "../../../../public/assets/img/logo/thirty.png";
import slider_img_2_15 from "../../../../public/assets/img/logo/thirtyone.png";
import slider_img_2_16 from "../../../../public/assets/img/logo/thirtytwo.png";
import slider_img_1_17 from "../../../../public/assets/img/logo/thirtythree.png";
import slider_img_1_18 from "../../../../public/assets/img/logo/thirtyfive.png";
import slider_img_1_19 from "../../../../public/assets/img/logo/thirtysix.png";
import slider_img_1_20 from "../../../../public/assets/img/logo/thirtyseven.png";
import slider_img_2_17 from "../../../../public/assets/img/logo/thirtyeight.png";
import slider_img_2_18 from "../../../../public/assets/img/logo/thirtynine.png";
// import slider_img_2_19 from "../../../../public/assets/img/logo/fourty.png";
import slider_img_2_20 from "../../../../public/assets/img/logo/fourtyone.png";
import slider_img_1_21 from "../../../../public/assets/img/logo/fourtytwo.png";
import slider_img_1_22 from "../../../../public/assets/img/logo/fourtythree.png";
// import slider_img_1_23 from "../../../../public/assets/img/logo/fourtyfour.png";
import slider_img_1_25 from "../../../../public/assets/img/logo/fourtyfive.png";


const integration_content ={
    sub_title: "our cllients",
    title: <><span>The Faces of Our Success</span></>,
    // int_title: <>Integrated with Your Favourite Apps</>,
    // btn_text: "our clients",
    bg_img: "/assets/img/integration/integration-bg.jpg"
}
const {sub_title, title, int_title, btn_text, bg_img}  = integration_content


const slider_one_data = [
    slider_img_1_1,
    slider_img_1_2,
    slider_img_1_3,
    slider_img_1_4,
    slider_img_1_5,
    slider_img_1_6,
    slider_img_1_7,
    slider_img_1_8,
    slider_img_1_9,
    slider_img_1_10,
    slider_img_1_11,
    slider_img_1_12,
    slider_img_1_13,
    slider_img_1_14,
    slider_img_1_15,
    slider_img_1_16,
    slider_img_1_17,
    slider_img_1_18,
    slider_img_1_19,
    slider_img_1_20,
    slider_img_1_21,
    slider_img_1_22,
    // slider_img_1_23,
    // slider_img_1_24,
    slider_img_1_25,

]

const slider_two_data = [
    slider_img_2_1,
    slider_img_2_2,
    slider_img_2_3,
    slider_img_2_4,
    slider_img_2_5,
    slider_img_2_6,
    slider_img_2_7,
    slider_img_2_8,
    slider_img_2_9,
    slider_img_2_10,
    slider_img_2_11,
    slider_img_2_12,
    slider_img_2_13,
    slider_img_2_14,
    slider_img_2_15,
    slider_img_2_16,
    slider_img_2_17,
    slider_img_2_18,
    // slider_img_2_19,
    slider_img_2_20,

]


// slider one setting 
const setting_one = {
    speed: 12000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}

// slider two setting 
const setting_two = {
    speed: 12000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    rtl: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}
 
const IntegrationArea = ({style_integraton}) => {
    return (
        <>
            <div className="tp-integration-area tp-integration-mlr" style={{ paddingTop:'74px' }}>
               <div className="container">
                  <div className="row align-items-end tp-integration-section-space">
                     <div className="col-xl-6 col-lg-8 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-integration-section-box">
                            {style_integraton ? 
                                <>
                                    <h5 className="tp-integration-subtitle">{sub_title}</h5>
                                    <h3 className="tp-section-title-3">{int_title}</h3>                                
                                </> 
                                : 
                                <>
                                    <h5 className="tp-integration-subtitle">{sub_title}</h5>
                                    <h3 className="tp-section-title-3">{title}</h3>                                
                                </>
                            }
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-4 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-integration-btn text-lg-end text-start">
                           {/* <Link className="tp-btn-blue-lg tp-btn-hover alt-color-black" href="/integrations">
                              <span>{btn_text}</span>
                              <b></b>
                           </Link> */}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-integration-slider-wrapper pt-50 pb-50" 
                    style={{backgroundImage: `url(${bg_img})`}}>
                  <Slider {...setting_one} className="tp-integration-slider-active">
                    {slider_one_data.map((item, i)  => 
                        <div key={i} className="tp-integration-slider-main slick-slide">
                        <div className="tp-integration-slider-item">
                                <Image src={item} alt="theme-pure"  />
                        </div>
                     </div>
                    )}                     
                  </Slider>
                  <Slider {...setting_two} className="tp-integration-slider-active-2 carousel-rtl" dir="rtl">
                    {slider_two_data.map((item, i)  => 
                        <div key={i} className="tp-integration-slider-main slick-slide">
                        <div className="tp-integration-slider-item">
                           <Image src={item} alt="theme-pure" />
                        </div>
                     </div>
                        
                    )} 
                  </Slider>
               </div>
            </div>
        </>
    );
};

export default IntegrationArea;