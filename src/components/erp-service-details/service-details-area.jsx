import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceVideo from "@/src/components/homes/home-5/webiste-service-video";
import service_img from "../../../public/assets/img/service/appblock.png"; 

// Mock Data for ERP Applications
const erp_app_details = {
    category_title: "ERP Applications",
    categories: [
        { id: 1, category: "Web Development", cls: "", link: "/web-development-service-details" },
        { id: 2, category: "Payment Solution", cls: "", link: "/paymentsolution-service-details" },
        { id: 3, category: "Security Solution", cls: "", link: "/securitysolution-service-details" },
        { id: 4, category: "App Development", cls: "", link: "/app_development-service-details" },
        { id: 5, category: "Business Solution", cls: "", link: "/business-service-details" },
        { id: 6, category: "E-Commerce", cls: "", link: "/e-commerce-service-details" },
        { id: 7, category: "ERP Applications", cls: "active", link: "/erp-service-details" },
    ],
    videos: [
        { id: 1, src: '/assets/erp-overview.mp4', poster: '/assets/erp-poster.jpg', title: "ERP Applications Overview" }
    ],
    overview_title: "ERP Application Overview",
    overview_des: (
        <>
            Our ERP solutions streamline business processes, automate operations, and provide real-time data analytics, helping businesses to improve efficiency, reduce costs, and make informed decisions.
        </>
    ),
    overview_list: [
        <>Seamless Integration: <span>Our ERP solutions integrate seamlessly with your existing systems, providing a unified platform for managing various business functions.</span></>,
        <>Customizable Modules: <span>We offer modular ERP solutions tailored to your specific business needs, from finance to supply chain management.</span></>,
        <>Real-time Data: <span>Get access to real-time data and analytics to improve decision-making and operational efficiency.</span></>,
    ],
    challenge_title: "ERP Implementation Challenges",
    challenge_des: (
        <>
            While implementing ERP systems can greatly improve business processes, it also presents challenges such as data migration, user adoption, and integration with existing systems. We address these challenges with comprehensive support and expert guidance.
        </>
    ),
};

const ServiceDetailsArea = () => {
    // State to track the selected service category
    const [selectedCategory, setSelectedCategory] = useState("ERP Applications");

    // Dynamically change content based on selected category
    const service_details_content = selectedCategory === "ERP Applications" ? erp_app_details : {
        // Default content or existing data (e.g., for Web Development)
        category_title: "Service Category",
        categories: [
            { id: 1, category: "Web Development", cls: "", link: "/web-development-service-details" },
            { id: 2, category: "Payment Solution", cls: "", link: "/paymentsolution-service-details" },
            { id: 3, category: "Security Solution", cls: "", link: "/securitysolution-service-details" },
            { id: 4, category: "App Development", cls: "", link: "/app_development-service-details" },
            { id: 5, category: "Business Solution", cls: "", link: "/business-service-details" },
            { id: 6, category: "E-Commerce", cls: "", link: "/e-commerce-service-details" },
            { id: 7, category: "ERP Applications", cls: "", link: "/erp-service-details" },
        ],
        videos: [
            { id: 1, src: '/assets/web-dev-overview.mp4', poster: '/assets/web-dev-poster.jpg', title: "Web Development Overview" }
        ],
        overview_title: "Web Development Overview",
        overview_des: (
            <>
                We excel in delivering end-to-end app development solutions tailored to your business needs. From intuitive mobile apps to complex enterprise solutions, our expertise ensures scalable, secure, and user-friendly applications.
            </>
        ),
        overview_list: [
            <>Exceptional Quality: <span>Our apps are meticulously designed to ensure smooth functionality, seamless performance, and an exceptional user experience across all devices.</span></>,
            <>Custom Design: <span>We create bespoke mobile and web applications that align with your brand, offering intuitive interfaces and rich user experiences.</span></>,
            <>Flexible Solutions: <span>Choose from a variety of app development services, including iOS, Android, hybrid apps, and enterprise-grade solutions.</span></>,
        ],
        challenge_title: "The Challenge",
        challenge_des: (
            <>
                In today’s fast-paced digital world, businesses face challenges such as staying competitive, ensuring security, and enhancing user engagement. At Amiyon, we tackle these complexities by delivering innovative, scalable, and secure app solutions.
            </>
        ),
    };

    const {
        category_title,
        categories,
        videos,
        overview_title,
        overview_des,
        overview_list,
        challenge_title,
        challenge_des,
    } = service_details_content;

    return (
        <div className="sv-details-area pt-100 pb-100" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-xl-4 col-lg-4">
                        <div className="sv-details-widget">
                            {/* Service Categories */}
                            <div className="sv-details-category mb-30">
                                <div className="sv-details-category-title">
                                    <h4 className="sv-details-title-sm">{category_title}</h4>
                                </div>
                                <div className="sv-details-category-list">
                                    <ul>
                                        {categories.map((item) => (
                                            <li key={item.id} className={item.cls}>
                                                <Link href={item.link} onClick={() => setSelectedCategory(item.category)}>
                                                    <span>{item.category}</span>
                                                    <i className="fal fa-angle-right"></i>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Service Videos */}
                            <div className="tp-service__dashboard mb-30">
                                {videos.map((video) => (
                                    <div key={video.id} className="mb-20">
                                        <ServiceVideo
                                            src={video.src}
                                            poster={video.poster}
                                            className="custom-video"
                                            style={{ width: '100%', borderRadius: '10px' }}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Social Sharing */}
                            <div className="sv-details-social-box mb-30">
                                <h4 className="sv-details-title-sm">Share it.</h4>
                                <div className="sv-details-social-link">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                    <Link href="#"><i className="fab fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="col-xl-8 col-lg-8">
                        <div className="sv-details-wrapper">
                            {/* Service Image */}
                            <div className="sv-details-thumb mb-45">
                                <Image className="w-100" src={service_img} alt="Service Overview" />
                            </div>

                            {/* Service Overview */}
                            <div className="sv-details-title-box mb-55">
                                <h4 className="sv-details-title">{overview_title}</h4>
                                <p>{overview_des}</p>
                            </div>

                            {/* Going Beyond */}
                            <div className="sv-details-text mb-35">
                                <h4 className="sv-details-text-title pb-10">Going Beyond the Usual</h4>
                                <ul>
                                    {overview_list.map((item, index) => (
                                        <li key={index}>
                                            <i className="fal fa-check"></i> <p>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* The Challenge */}
                            <div className="sv-details-text-2">
                                <h4 className="sv-details-text-title">{challenge_title}</h4>
                                <p>{challenge_des}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsArea
