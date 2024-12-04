import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

// Images Import
import about_img_1 from "../../public/assets/img/about/aboutbg.png"; // Background image
import about_img_2 from "../../public/assets/img/about/tab.png"; // Top-left overlay image
import about_img_3 from "../../public/assets/img/about/girls.png"; // Bottom-right overlay image

// About Content
const about_content = {
    title: "Our Purpose",
    sub_title: "Your Success is Our Purpose",
    description: (
        <>
           Empower businesses by providing cutting-edge digital solutions that drive growth and efficiency. We aim to bridge the gap between innovation and functionality, offering a range of services from mobile and web app development to hardware and software solutions. Our goal is to deliver tailored, high-quality solutions that not only meet but exceed the expectations of our clients, helping them succeed in an ever-evolving digital landscape.
        </>
    ),
};

const { title, sub_title, description } = about_content;

const AboutArea = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-visible");
                    } else {
                        entry.target.classList.remove("animate-visible");
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the element is visible
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) observer.unobserve(contentRef.current);
        };
    }, []);

    return (
        <div className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Image Section */}
                    <div className="col-lg-6 col-md-12 image-column">
                        <div className="image-container">
                            {/* Background Image */}
                            <div className="background-image" style={{ width:"524.11px", height:"386.07px" }}>
                                <Image src={about_img_1} alt="Background" layout="responsive" />
                            </div>

                            {/* Top-left Overlay Image */}
                            <div className="top-left-image" style={{ width:"320px", height:"320px" }}>
                                <Image src={about_img_2} alt="Top Left Overlay" layout="intrinsic" />
                            </div>

                            {/* Bottom-right Overlay Image */}
                            <div className="bottom-right-image" style={{ width:"267px", height:"173px" }}>
                                <Image src={about_img_3} alt="Bottom Right Overlay" layout="intrinsic" />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div
                        className="col-lg-6 col-md-12 content-column animate-left"
                        ref={contentRef}
                    >
                        <div className="text-content">
                            <h4 className="subtitle">{title}</h4>
                            <h3 className="title">{sub_title}</h3>
                            <p className="description">{description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about-section {
                    padding: 50px 0;
                }

                /* Content Animation (Coming from Right) */
                .animate-left {
                    opacity: 0;
                    transform: translateX(100px);
                    transition: all 0.8s ease-out;
                }

                .animate-left.animate-visible {
                    opacity: 1;
                    transform: translateX(0);
                }

                .text-content {
                    margin-bottom: 20px;
                }

                .subtitle {
                    color: #393939;
                    font-size: 20px;
                    margin-bottom: 10px;
                }

                .title {
                    font-size: 44px;
                    font-weight: normal;
                    margin-bottom: 15px;
                }

                .description {
                    text-align: justify;
                    font-size: 16px;
                    line-height: 1.6;
                }

                .image-container {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .background-image {
                    width: 100%;
                }

                /* Top-left Overlay Image */
                .top-left-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 40%; /* Adjust size */
                    transform: translate(-10%, -10%);
                    z-index: 2;
                    animation: float-overlay 3s ease-in-out infinite;
                }

                /* Bottom-right Overlay Image */
                .bottom-right-image {
                    position: absolute;
                    bottom: 5;
                    right: 0;
                    width: 30%; /* Adjust size */
                    transform: translate(10%, 10%);
                    z-index: 2;
                    animation: float-overlay 3s ease-in-out infinite;
                }

                @keyframes float-overlay {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(0, -5%);
                    }
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .row {
                        flex-direction: column;
                    }

                    .content-column {
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    .image-column {
                        text-align: center;
                    }

                    .top-left-image {
                        width: 50%;
                    }

                    .bottom-right-image {
                        width: 40%;
                    }
                }

                @media (max-width: 480px) {
                    .top-left-image {
                        width: 60%;
                    }

                    .bottom-right-image {
                        width: 50%;
                    }

                    .title {
                        font-size: 24px;
                    }

                    .description {
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutArea;
