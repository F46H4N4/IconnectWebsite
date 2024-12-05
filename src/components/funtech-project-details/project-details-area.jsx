import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/funtechblock.png";
import solution_2  from "../../../public/assets/img/project/solution-2.jpg";
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicEffect';


const project_details_data = [
    {
        id: 1,
        cls: "info", 
        title: "About the Project",
        feture_list: false,
        description: (
            <>
                **Funtech** is an e-commerce platform dedicated to providing a wide range of high-quality products for customers seeking convenience and variety. From personal care products to travel accessories, electronic appliances, perfumes, digital cards, mobile tablets, and gaming accessories, Funtech Online offers something for everyone.
                <br /><br />
                The platform's goal is to offer customers a seamless shopping experience with a curated selection of premium products across various categories. Whether you need the latest tech gadgets, everyday essentials, or luxury items, Funtech Online aims to meet your needs.
            </>
        ),
    },
    {
        id: 2,
        cls: "overview", 
        title: "Project Highlights",
        feture_list: [
            <>Wide range of categories including personal care, travel accessories, and electronic appliances.</>,
            <>Secure shopping experience with reliable payment methods.</>,
            <>Exclusive selection of perfumes, mobile tablets, gaming accessories, and digital cards.</>,
            <>User-friendly interface for an effortless shopping experience.</>,
            <>Customer support available for any inquiries or product issues.</>,
        ],
        description: (
            <>
                **Funtech** provides the following key features:
                <br /><br />
                - A broad selection of high-quality personal care products, from skincare to wellness.
                <br />
                - Comprehensive travel accessories to make your journeys more comfortable and convenient.
                <br />
                - The latest in electronic appliances, offering the best tech gadgets and home electronics.
                <br />
                - Exclusive perfumes, mobile tablets, gaming accessories, and digital cards for all your lifestyle needs.
                <br />
                - A smooth and fast shopping experience with secure payment options and customer support.
            </>
        ),
    },
];

const project_details_content = { 
    solution_title: "Solution & Result",
    des_1: (
        <>
            **Funtech** was created with the goal of providing customers with an all-in-one platform where they can shop for a diverse range of products from multiple categories. With a strong focus on quality and convenience, the platform offers products that cater to every aspect of life.
            <br /><br />
            The platform ensures that every item listed meets high standards, from technology to lifestyle essentials. Whether you're shopping for yourself or looking for the perfect gift, Funtech Online offers an unmatched shopping experience.
        </>
    ),
    des_2: (
        <>
            The project has received a highly positive response from users who appreciate the variety and quality of products available. **Funtech Online** has established itself as a go-to platform for everything from electronic gadgets to lifestyle products. As the business grows, it continues to expand its product range and improve its services to meet customer needs.
            <br /><br />
            Focusing on customer satisfaction, fast shipping, and an easy-to-navigate website, **Funtech** has built a loyal customer base and continues to thrive in the competitive online shopping space.
        </>
    ),
};
const {solution_title, des_1, des_2 }  = project_details_content;

const ProjectDetailsArea = () => {
   
   useIsomorphicLayoutEffect(() => {
      ScrollTrigger.create({
         trigger: ".social-box-pin",
         start: "top 10%",
         end: "bottom 60%",
         pin: ".social-box-pin",
         pinSpacing: false
        });
   },[])

    return (
        <>
       <div className="pd-details-area" style={{ paddingTop: '74px' }}>
      <div
         className="container"
         style={{
            maxWidth: '1200px', // Center the content within a fixed width
            margin: '0 auto',  // Center horizontally
            padding: '0 20px', // Add space on left and right
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
               paddingLeft: '20px', // Add small padding on the left
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
                     <Image src={solution_1} alt="theme-pure" />
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
                        paddingLeft: '20px', // Adjust space for the description
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