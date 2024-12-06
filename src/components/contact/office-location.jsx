import React from 'react';
import Image from 'next/image';

import location from "../../../public/assets/img/contact/location.png"; // Location Background Image
import kuwaitFlag from "../../../public/assets/img/contact/kuwait.png"; // Kuwait Flag Image
import bottomLeftImg from "../../../public/assets/img/contact/manwithlap.png"; // Bottom Left Image

const OfficeLocation = () => {
    return (
        <>
            <div className="contact-info-area pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-info-img-container">
                                {/* Background Image */}
                                <div className="background-image">
                                    <Image
                                        src={location}
                                        alt="Location Background"
                                        layout="fill" // Fill the container
                                        objectFit="cover" // Ensure proportional scaling
                                        priority={true} // Optimize loading
                                    />
                                </div>

                                {/* Flag and Text */}
                                <div className="header-content">
                                    <Image
                                        src={kuwaitFlag}
                                        alt="Kuwait Flag"
                                        width={128}
                                        height={40}
                                        className="kuwait-flag"
                                    />
                                    <p style={{ color:'white', fontSize:'18px'}}>Our Location</p>
                                </div>

                                {/* Address */}
                                <div className="address">
                                    <p style={{ color:'white', lineHeight:'1.3'}}>
                                        Al Mubarakiya, Oman Street, <br />
                                        Behind Gulf Bank Head Office, <br />
                                        Kuwait City 15258
                                    </p>
                                </div>

                                {/* Man with Laptop Image */}
                                <div className="bottom-image">
                                    <Image
                                        src={bottomLeftImg}
                                        alt="Man with Laptop"
                                        width={200}
                                        height={150}
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scoped CSS */}
            <style jsx>{`
                .contact-info-area {
                    padding-bottom: 90px;
                }

                .contact-info-img-container {
                    position: relative;
                    width: 100%;
                    height: 410px; /* Default height for larger screens */
                    overflow: hidden;
                }

                .background-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }

                .header-content {
                    position: absolute;
                    bottom: 180px;
                    left: 20px;
                    display: flex;
                    align-items: center;
                    color: white;
                }

                .header-content p {
                    margin-left: 10px;
                    font-size: 18px;
                    font-weight: bold;
                }

                .address {
                    position: absolute;
                    bottom: 60px;
                    left: 20px;
                    color: white;
                    font-size: 16px;
                }

                .bottom-image {
                    position: absolute;
                    bottom: -10px;
                    right: 20px;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .contact-info-img-container {
                        // height: 100vh; /* Full height for smaller screens */
                    }

                    .header-content p {
                        font-size: 14px; /* Adjust font size */
                    }

                    .address {
                        font-size: 14px;
                        bottom: 40px;
                    }

                    .bottom-image {
                        width: 150px; /* Resize image */
                        height: auto;
                        bottom: -10px;
                        right: -35px;
                    }
                }
            `}</style>
        </>
    );
};

export default OfficeLocation;
