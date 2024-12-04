import service_data from '@/src/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Import images
import service_icon_1 from '../../../public/assets/img/service/sv-icon-3-1.png';
import service_icon_2 from '../../../public/assets/img/service/service-shape-3-1.png';

// Service content
const service_content = {
    bg_img: "/assets/img/service/service_main_bg.png",
    service_title: "Services",
    service_info: <>What We Do</>,
};
const { title, btn_text, bg_img, service_title, service_info } = service_content;

const ServiceArea = () => {
    return (
        <>
            <div className="tp-service-area pb-120 z-index">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                                <h3 className="tp-section-title tp-title-anim">{title}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Featured service */}
                        <div className="col-xl-8 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                            <div
                                className="tp-service-3-item mb-30 p-relative z-index"
                                style={{
                                    backgroundImage: `url(${bg_img})`,
                                    backgroundSize: 'cover', // Ensures the image covers the div
                                    backgroundPosition: 'center', // Centers the image
                                    height: '361px', // Fixed height for the background image
                                }}
                            >
                                <div className="tp-service-3-content">
                                    <span>{service_title}</span>
                                    <h4 className="tp-service-3-title-sm">
                                        <Link href="/service-details">{service_info}</Link>
                                    </h4>
                                </div>
                                <div className="tp-service-3-btn">
                                    <Link className="tp-btn-white-solid" href="/service-details">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Mapped services */}
                        {service_data.slice(17, 24).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".5s"
                            >
                                <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                    <div className="tp-service-sm-icon">
                                        {item.icon && (
                                            <Image src={item.icon} alt={item.title} width={50} height={50} />
                                        )}
                                    </div>
                                    <div className="tp-service-sm-content">
                                        <span>{item.title}</span>
                                        <h3 className="tp-service-sm-title">
                                            <Link href="/service-details">{item.description}</Link>
                                        </h3>
                                        <div className="tp-service-sm-link">
                                            <Link href="/service-details">
                                                Learn More <i className="far fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Responsive styles */
                @media (max-width: 1200px) {
                    .tp-service-3-item {
                        height: 361px; /* Fixed height for larger screens */
                    }
                }

                @media (max-width: 768px) {
                    .tp-service-section-wrapper {
                        text-align: center;
                    }

                    .tp-service-sm-item {
                        margin-bottom: 30px;
                    }

                    .tp-service-3-item {
                        height: 361px; /* Fixed height for smaller screens */
                    }

                    .tp-service-sm-title {
                        font-size: 16px;
                    }

                    .tp-service-3-btn {
                        margin-top: 15px;
                    }
                }

                @media (max-width: 576px) {
                    .tp-service-3-item {
                        height: 361px; /* Fixed height for extra small screens */
                    }

                    .tp-service-sm-title {
                        font-size: 14px;
                    }

                    .tp-service-sm-link {
                        font-size: 12px;
                    }
                }
            `}</style>
        </>
    );
};

export default ServiceArea;
