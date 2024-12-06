import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// images import
import about_img_1 from "../../public/assets/img/about/aboutthreebg.png";
import about_img_2 from "../../public/assets/img/about/aboutoneblock.png"; // Lady
import about_img_3 from "../../public/assets/img/about/aboutthreetwoblock.png"; // Thinking dialogue box

// about content
const about_content = {
    title: "Best Choice",
    sub_title: "Why Choose Us ?",
    des: (
        <>
            At iConnect, we combine innovative technology with industry expertise
            to deliver tailored IT solutions, advanced hardware, and digital
            services that empower your business. From cutting-edge software and
            secure mobile apps to efficient hardware and security systems, our
            scalable solutions enhance operations and drive growth. With a
            commitment to quality, customer satisfaction, and continuous
            improvement, iConnect is the trusted partner for businesses seeking
            innovation, reliability, and excellence.
        </>
    ),
};

const { title, sub_title, des } = about_content;

const AboutArea = () => {
    return (
        <div className="tp-about__area tp-about__pt-pb" style={{ paddingTop:'74px' }}>
            <div className="container">
                <div className="row align-items-center about-row">
                    <div
                        className="col-xl-6 col-lg-6 wow tpfadeLeft content-column"
                        data-wow-duration=".9s"
                        data-wow-delay=".2s"
                    >
                        <div className="tp-about__right">
                            <div className="tp-about__section-box">
                                <h4 className="tp-section-subtitle" style={{ color: '#393939' }}>{title}</h4>
                                <h3 className="tp-section-title mb-15">{sub_title}</h3>
                                <p className="tp-about__description">{des}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-6 col-lg-6 wow tpfadeRight image-column"
                        data-wow-duration=".9s"
                        data-wow-delay=".6s"
                    >
                        <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                            <div className="tp-about__img1">
                                <Image src={about_img_1} alt="Background" />
                                <div className="tp-about__img2 animate-lady">
                                    <Image src={about_img_2} alt="Lady" />
                                </div>
                                <div className="tp-about__img3 animate-dialogue">
                                    <Image src={about_img_3} alt="Thinking dialogue" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .tp-about__img1 {
                    position: relative;
                    display: inline-block;
                }
                .tp-about__description {
                    text-align: justify; 
                }

                .tp-about__img2 {
                    position: absolute;
                    top: 60%;
                    left: 10%;
                    z-index: 2;
                    transition: all 0.3s ease-in-out;
                }

                .tp-about__img3 {
                    position: absolute;
                    top: 5%;
                    right: -5%;
                    z-index: 3;
                    transition: all 0.3s ease-in-out;
                }

                /* Animation for the lady */
                .animate-lady {
                    animation: float-lady 3s ease-in-out infinite;
                }

                @keyframes float-lady {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                /* Animation for the dialogue box */
                .animate-dialogue {
                    animation: float-dialogue 2.5s ease-in-out infinite;
                }

                @keyframes float-dialogue {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .about-row {
                        flex-direction: column;
                    }

                    .content-column {
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    .tp-about__description {
                        text-align: justify; 
                        color: #333;
                        font-size: 16px;
                        line-height: 1.6;
                    }

                    .image-column {
                        text-align: center;
                        position: relative;
                        margin-top: 20px;
                    }

                    .tp-about__img1 {
                        margin: 0 auto;
                    }

                    .tp-about__img2 {
                        top: 40% !important;
                        left: 50% !important;
                        transform: translate(-50%, -50%) !important;
                        z-index: 2;
                    }

                    .tp-about__img3 {
                        top: -15% !important;
                        right: 10% !important;
                        transform: translateY(0) !important;
                        width: 120px !important; /* Set width to 120px on smaller screens */
                        z-index: 3;
                    }

                    /* Align the title and subtitle */
                    .tp-about__section-box h4 {
                        margin-left: 0; /* Remove left margin */
                    }

                    .tp-about__section-box h3 {
                        margin-left: 0; /* Align subtitle with title */
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutArea;
