import Brwoser from '@/src/common/brwoser';
import { CopyRight } from '@/src/common/social-links';
import EmailIcon from '@/src/svg/email';
import EmailTwo from '@/src/svg/email-2';
import PhoneTwo from '@/src/svg/phone-2';
import RightArrow from '@/src/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

import footer_logo from "../../../public/assets/img/logo/logo-black.png";

// Footer slider data
const footer_slider_data = [
    { logo: "/assets/img/logo/mada.png" },
    { logo: "/assets/img/logo/paynet_logo.png" },
    { logo: "/assets/img/logo/organique-logo.png" },
    { logo: "/assets/img/logo/Al-Eid-Logistics_logo.png" },
    { logo: "/assets/img/logo/OMAHATLOGO02_logo.png" },
    { logo: "/assets/img/logo/sheikh.png" },
    { logo: "/assets/img/logo/Metco.png" },
    { logo: "/assets/img/logo/kuwaitfinance.png" },
    { logo: "/assets/img/logo/KDD.png" },
    { logo: "/assets/img/logo/yalfish.png" },
    { logo: "/assets/img/logo/kfic.png" },
    { logo: "/assets/img/logo/foot.png" },
    { logo: "/assets/img/logo/school.png" },
    { logo: "/assets/img/logo/yadhami.png" },
    { logo: "/assets/img/logo/outdoor.png" },
    { logo: "/assets/img/logo/red-mango.png" },
    { logo: "/assets/img/logo/YOUTOPIA.png" },
    { logo: "/assets/img/logo/orchid.png" },
    { logo: "/assets/img/logo/alnour.png" },
    { logo: "/assets/img/logo/almalek.png" },
    { logo: "/assets/img/logo/concept.png" },
    { logo: "/assets/img/logo/arabic.png" },
    { logo: "/assets/img/logo/hr.png" },
    { logo: "/assets/img/logo/aldurah.png" },
    { logo: "/assets/img/logo/sheikh.png" },
    { logo: "/assets/img/logo/organique.png" },
    { logo: "/assets/img/logo/candhalls.png" },
    { logo: "/assets/img/logo/jarakki.png" },
    { logo: "/assets/img/logo/mv.png" },
    { logo: "/assets/img/logo/diet.png" },
    { logo: "/assets/img/logo/codeeight.png" },
    { logo: "/assets/img/logo/shayf.png" },
    { logo: "/assets/img/logo/brunchkabab.png" },
    { logo: "/assets/img/logo/marinekart.png" },
    { logo: "/assets/img/logo/wings.png" },
    { logo: "/assets/img/logo/pashmina.png" },
    { logo: "/assets/img/logo/belmokhba.png" },
    { logo: "/assets/img/logo/hamarja.png" },
    { logo: "/assets/img/logo/lavender.png" },
    { logo: "/assets/img/logo/seenstiches.png" },
    { logo: "/assets/img/logo/linetwentynine.png" },
    { logo: "/assets/img/logo/hrarabic.png" },
    { logo: "/assets/img/logo/star.png" },
    { logo: "/assets/img/logo/arabiaselection.png" },
    { logo: "/assets/img/logo/diamond.png" },
    { logo: "/assets/img/logo/square.png" },

];

// Slider settings
const setting = {
    speed: 7000,
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

const FooterThree = () => {
    return (
        <>
            <div className="footer-bottom-content tp-browser-bg-shape">
                <div className="tp-footer-slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mb-4">
                                <h6>Our Clients</h6>
                                <h2 className="footer-slider-heading" style={{ paddingTop:'74px' }}>The Faces of Our Success</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid g-0">
                        <div className="row g-0 justify-content-center">
                            <Slider {...setting} className="footer-slide-active">
                                {footer_slider_data.map((item, i) => (
                                    <div key={i} className="footer-slide-wrapper">
                                        <div
                                            className="footer-slide-item"
                                            style={{
                                                borderRadius: "0",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "102.03px",
                                                width:"211.35px",
                                                padding: "10px",
                                                background: "#f9f9f9",
                                                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            <Image
                                                src={item.logo}
                                                alt={`Logo ${i + 1}`}
                                                width={103.25}
                                                height={103.36}
                                                className="footer-slide-logo"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterThree;
