import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

// Images Import
import about_img_1 from "../../public/assets/img/about/planbg.png"; // Background image
import about_img_2 from "../../public/assets/img/about/plan.png"; // Overlay image

// About Content
const about_content = {
    title: "Best Choice",
    sub_title: "Why Choose Us?",
    description: (
        <>
          Choosing iConnect means partnering with a team committed to delivering excellence. We combine innovative technology with tailored solutions, all centered around your unique business needs. With a proven track record across various industries, we provide reliable, efficient, and future-ready solutions to help your business thrive.
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
                    {/* Text Content */}
                    <div
                        className="col-lg-6 col-md-12 content-column animate-left"
                        ref={contentRef} style={{ width:'551px', height:'366px' }}
                    >
                        <div className="text-content">
                            <h4 className="subtitle" >{title}</h4>
                            <h3 className="title" style={{ fontSize:'44px', fontWeight:'normal' }}>{sub_title}</h3>
                            <p className="description">{description}</p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="col-lg-6 col-md-12 image-column">
                        <div className="image-container">
                            {/* Base Image */}
                            <div className="background-image" style={{ width:'474.57px', height:'370.49px' }}>
                                <Image src={about_img_1} alt="Background" layout="responsive" />
                            </div>

                            {/* Overlay Image with Animation */}
                            <div className="overlay-image animate-overlay" style={{ width:'397.7px', height:'331.55px' }}>
                                <Image src={about_img_2} alt="Overlay" layout="intrinsic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about-section {
                    padding: 50px 0;
                }

                /* Content Animation (Coming from Left) */
                .animate-left {
                    opacity: 0;
                    transform: translateX(-100px);
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
                    font-size: 28px;
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

                /* Overlay Image Animation */
                .overlay-image {
                    position: absolute;
                    // top: 40%;
                    // left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40%;
                    z-index: 2;
                    animation: float-overlay 3s ease-in-out infinite;
                }

                @keyframes float-overlay {
                    0%, 100% {
                        transform: translate(-50%, -50%);
                    }
                    50% {
                        transform: translate(-50%, -55%);
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

                    .overlay-image {
                        width: 60%; /* Adjust for smaller screens */
                    }
                }

                @media (max-width: 480px) {
                    .overlay-image {
                        width: 70%; /* Further adjust for very small screens */
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
