import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceVideo from "@/src/components/homes/home-5/webiste-service-video";
// import service_img from "../../../public/assets/img/service/security.png"; 

// Updated Data for Security Solution
const service_details_content = {
    category_title: "Service Category",
    categories: [
        { id: 1, category: "Web Development", cls: "", link: "/web-development-service-details" },
        { id: 2, category: "Payment Solution", cls: "", link: "/paymentsolution-service-details" },
        { id: 3, category: "Security Solution", cls: "active", link: "/securitysolution-service-details" },
        { id: 4, category: "App Development", cls: "", link: "/app_development-service-details" },
        { id: 5, category: "Business Solution", cls: "", link: "/business-service-details" },
        { id: 6, category: "E-Commerce", cls: "", link: "/e-commerce-service-details" },
        { id: 7, category: "ERP Applications", cls: "", link: "/erp-service-details" },
    ],
    videos: [
        { id: 1, src: '/assets/security-overview.mp4', poster: '/assets/security-poster.jpg', title: "Security Solutions Overview" },
    ],
    overview_title: "Security Solution Overview",
    overview_des: (
        <>
            Our security solutions protect your business from evolving cyber threats, ensuring your data, systems, and operations remain secure. 
            With cutting-edge technology and expert strategies, we deliver comprehensive protection tailored to your needs.
        </>
    ),
    overview_list: [
        <>Proactive Protection: <br /> <span>Stay ahead of threats with real-time monitoring and mitigation.</span></>,
        <>Comprehensive Coverage: <br /> <span>From firewalls to endpoint security, we've got you covered.</span></>,
        <>Custom Solutions: <br /> <span>Tailored to your business, ensuring scalable and effective security measures.</span></>,
    ],
    challenge_title: "The Challenge",
    challenge_des: (
        <>
            In today's digital landscape, businesses face unprecedented cyber threats. 
            Balancing security with seamless operations is critical but challenging. 
            Our solutions address these complexities with precision and reliability.
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

const ServiceDetailsArea = () => {
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
                                                <Link href={item.link}>
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
                                {/* <Image className="w-100" src={service_img} alt="Security Solution Overview" /> */}
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

export default ServiceDetailsArea;
