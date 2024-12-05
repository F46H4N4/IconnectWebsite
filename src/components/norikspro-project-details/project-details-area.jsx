import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import solution_1 from "../../../public/assets/img/project/kficblock.png"; // Replace with relevant image for Norikspro
import solution_2 from "../../../public/assets/img/project/solution-2.jpg";
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicEffect';

const project_details_data = [
    {
        id: 1,
        cls: "info",
        title: "About the Project",
        feture_list: false,
        description: (
            <>
                **Norikspro** is a cutting-edge auditing platform designed to streamline and enhance financial and operational audits for businesses. The project leverages advanced technologies to ensure accuracy, compliance, and efficiency in auditing processes.
                <br /><br />
                The platform is user-centric, offering tailored auditing solutions to meet the unique requirements of businesses across various sectors. With an emphasis on transparency and ease of use, **Norikspro** ensures that organizations can achieve their compliance and performance goals effectively.
            </>
        ),
    },
    {
        id: 2,
        cls: "overview",
        title: "Project Highlights",
        feture_list: [
            <>Comprehensive auditing features to streamline processes.</>,
            <>Customizable solutions tailored to business-specific needs.</>,
            <>User-friendly interface for seamless navigation and data management.</>,
            <>Enhanced compliance tracking and performance analysis.</>,
            <>Secure data handling with robust encryption and backup features.</>,
        ],
        description: (
            <>
                Norikspro provides the following key features:
                <br /><br />
                - Advanced analytics for detailed audit reporting and decision-making.
                <br />
                - Customizable dashboards to meet organizational needs.
                <br />
                - Automated data validation to minimize errors.
                <br />
                - Integration capabilities with existing ERP and accounting systems.
                <br />
                - Scalable solutions designed for businesses of all sizes.
            </>
        ),
    },
];

const project_details_content = {
    solution_title: "Solution & Result",
    des_1: (
        <>
            **Norikspro** was developed with the mission to revolutionize the auditing process, making it more efficient and accurate. By leveraging innovative technology, the platform ensures that businesses can meet compliance requirements while gaining valuable insights into their operations.
            <br /><br />
            The platform is designed to adapt to the diverse needs of users, offering secure and scalable solutions for businesses of all sizes.
        </>
    ),
    des_2: (
        <>
            The outcome of the Norikspro project has been transformative for its users. Businesses have reported improved efficiency and accuracy in their auditing processes, leading to better decision-making and compliance management. With its robust features and user-friendly design, Norikspro is setting new standards in the auditing industry.
            <br /><br />
            **Norikspro** continues to evolve, introducing new features and capabilities to meet the growing demands of modern businesses.
        </>
    ),
};

const { solution_title, des_1, des_2 } = project_details_content;

const ProjectDetailsArea = () => {
    useIsomorphicLayoutEffect(() => {
        ScrollTrigger.create({
            trigger: ".social-box-pin",
            start: "top 10%",
            end: "bottom 60%",
            pin: ".social-box-pin",
            pinSpacing: false,
        });
    }, []);

    return (
        <>
            <div className="pd-details-area" style={{ paddingTop: '74px' }}>
                <div
                    className="container"
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 20px',
                    }}
                >
                    <div
                        className="row g-0"
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}
                    >
                        <div className="col-xl-2 col-lg-2 social-box-pin" style={{ display: 'none' }}>
                            {/* Hidden social links */}
                        </div>
                        <div
                            className="col-xl-10 col-lg-10"
                            style={{
                                flex: 1,
                                paddingLeft: '20px',
                            }}
                        >
                            <div className="pd-details-wrapper" style={{ textAlign: 'left' }}>
                                {project_details_data.map((item, i) => (
                                    <div key={i} className={`pd-details-${item.cls}`} style={{ marginBottom: '20px' }}>
                                        <h4
                                            className="pd-details-title"
                                            style={{
                                                textAlign: 'left',
                                                marginLeft: '0',
                                                paddingLeft: '0',
                                            }}
                                        >
                                            {item.title}
                                        </h4>
                                        {item.feture_list && (
                                            <ul style={{ paddingLeft: '40px' }}>
                                                {item.feture_list.map((list, i) => (
                                                    <li key={i}>{list}</li>
                                                ))}
                                            </ul>
                                        )}
                                        <p style={{ textAlign: 'left', marginLeft: '0' }}>{item.description}</p>
                                    </div>
                                ))}
                                <div className="pd-details-solution">
                                    <div
                                        className="pd-details-solution-img-box"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        <div className="pd-details-solution-img" style={{ marginRight: '30px' }}>
                                            <Image src={solution_1} alt="Norikspro Audit" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ margin: '0', padding: '0' }}>
                                        <div className="col-md-3" style={{ padding: '0' }}>
                                            <div
                                                className="pd-solution-title-box"
                                                style={{ textAlign: 'left', paddingLeft: '20px' }}
                                            >
                                                <h4 className="pd-details-title">{solution_title}</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="col-md-9"
                                            style={{
                                                padding: '0',
                                                paddingLeft: '20px',
                                            }}
                                        >
                                            <div className="pd-solution-paragraph" style={{ textAlign: 'left' }}>
                                                <p>{des_1}</p>
                                                <p>{des_2}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsArea;
