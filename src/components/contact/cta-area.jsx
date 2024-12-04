import Link from 'next/link';
import React from 'react';

const cta_content = { 
    bg_img: "/assets/img/cta/connect-new.png",
    title: "Let's Connect",
    description: <>We create the best opportunities for your business.<br /></>,
    btn_text: "Contact us Now!",
};
const { bg_img, title, description, btn_text } = cta_content;

const CtaArea = () => {
    return (
        <>
            <div>
                <div className="tp-cta"></div>
                <div className="container pt-50">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="tp-cta-bg"
                                style={{
                                    backgroundImage: `url(${bg_img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="tp-cta-content tp-inner-font text-center">
                                    <h3 className="tp-section-title text-white">{title}</h3>
                                    <p>{description}</p>
                                    <Link
                                        href="/contact"
                                        className="blur-effect-btn"
                                        style={{
                                            display: "inline-block",
                                            padding: "12px 30px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            color: "#000",
                                            textTransform: "uppercase",
                                            textAlign: "center",
                                            background: "rgba(255, 255, 255, 0.3)", // Transparent white
                                            backdropFilter: "blur(10px)", // Blur effect
                                            border: "1px solid rgba(255, 255, 255, 0.5)", // Transparent border
                                            borderRadius: "30px", // Rounded corners
                                            transition: "all 0.3s ease",
                                            textDecoration: "none", // Remove underline
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.background =
                                                "rgba(255, 255, 255, 0.5)")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.background =
                                                "rgba(255, 255, 255, 0.3)")
                                        }
                                    >
                                        {btn_text}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaArea;
