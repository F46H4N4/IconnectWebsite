import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import ServiceVideo from "@/src/components/homes/home-5/webiste-service-video";
// import service_img from "../../../public/assets/img/service/uiuxdesign.png"; // Update with appropriate image path

// Mock Data for UI/UX Design Services
const service_details_content = {
    category_title: "UI/UX Design Services",
    categories: [
        { id: 1, category: "Web Development", cls: "", link: "/web-development-service-details" },
        { id: 2, category: "Payment Solution", cls: "", link: "/paymentsolution-service-details" },
        { id: 3, category: "Security Solution", cls: "", link: "/securitysolution-service-details" },
        { id: 4, category: "App Development", cls: "", link: "/app_development-service-details" },
        { id: 5, category: "Business Solution", cls: "", link: "/buisness-service-details" },
        { id: 6, category: "E-Commerce", cls: "", link: "/e-commerce-service-details" },
        { id: 7, category: "UI/UX Design", cls: "active", link: "/ui-service-details" },
    ],
    videos: [
        { id: 1, src: '/assets/uiux-design-overview.mp4', poster: '/assets/uiux-design-poster.jpg', title: "UI/UX Design Overview" }
    ],
    overview_title: "UI/UX Design Overview",
    overview_des: (
        <>
            Our UI/UX design services focus on creating engaging and intuitive digital experiences. 
            We blend creativity with usability to craft designs that not only look great but also enhance user satisfaction.
        </>
    ),
    overview_list: [
        <>User-Centered Design: <span>We prioritize user needs to deliver intuitive and impactful designs.</span></>,
        <>Responsive Interfaces: <span>Create designs that work seamlessly across devices and screen sizes.</span></>,
        <>Enhanced Usability: <span>Streamline navigation and interaction to improve user satisfaction.</span></>,
    ],
    challenge_title: "Challenges in UI/UX Design",
    challenge_des: (
        <>
            Crafting exceptional UI/UX involves understanding user behavior, addressing accessibility concerns, and keeping up with design trends.
            Our team ensures that your design meets these challenges while achieving your business goals.
        </>
    ),
};

const ServiceDetailsArea = () => {
    const [selectedCategory, setSelectedCategory] = useState('UI/UX Design');

    const {
        category_title,
        categories,
        videos,
        overview_title,
        overview_des,
        overview_list,
        challenge_title,
        challenge_des
    } = service_details_content;

    return (
        <div className="sv-details-area pt-100 pb-100" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-xl-4 col-lg-4">
                        <div className="sv-details-widget">
                            {/* Service Categories */}
                          

                            {/* Service Videos */}
                            <div className="tp-service__dashboard mb-30">
                                {videos.map((video) => (
                                    <div key={video.id} className="mb-20">
                                        {/* <ServiceVideo
                                            src={video.src}
                                            poster={video.poster}
                                            className="custom-video"
                                            style={{ width: '100%', borderRadius: '10px' }}
                                        /> */}
                                    </div>
                                ))}
                            </div>

                            {/* Social Sharing */}
                            <div className="sv-details-social-box mb-30">
                                <h4 className="sv-details-title-sm">Share it.</h4>
                                <div className="sv-details-social-link">
                                <Link
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://iconnect-kw.com/')}`}
                                target="_blank"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </Link>                                    
        
                            <Link
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://iconnect-kw.com/')}&text=${encodeURIComponent('Check out our Service!')}`}
                                target="_blank"
                            >
                                <i className="fab fa-twitter"></i>
                            </Link>                                   
                        
                            <Link
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://iconnect-kw.com/')}&title=${encodeURIComponent('Service Details')}`}
                            target="_blank"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-xl-8 col-lg-8">
                        <div className="sv-details-wrapper">
                            {/* Service Image */}
                            {/* <div className="sv-details-thumb mb-45">
                                <Image className="w-100" src={service_img} alt="Service Overview" />
                            </div> */}

                            {/* Service Overview */}
                            <div className="sv-details-title-box mb-55">
                                <h4 className="sv-details-title">{overview_title}</h4>
                                <p>{overview_des}</p>
                            </div>

                            {/* Going Beyond */}
                            <div className="sv-details-text mb-35">
                                <h4 className="sv-details-text-title pb-10">Our Approach</h4>
                                <ul>
                                    {overview_list.map((item, index) => (
                                        <li key={index}>
                                            <i className="fal fa-check"></i>
                                            <p>{item}</p>
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
