import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/paynetblock.png";
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
                Paynet is a digital and risk-less payment platform that instantly enables sellers to accept online payments without extra hardware. Buyers can make payments using their mobile or any personal device without the need to swipe bank cards.
                <br /><br />
                Currently, around 80% of online shopping payments and a majority of other transactions rely on online banking. Paynet simplifies the payment process by offering a payable link, giving businesses the flexibility to grow without additional setup.
                <br /><br />
                The platform generates both paper and digital receipts, which can be sent via WhatsApp, SMS, email, or any messaging app. These receipts are customizable, allowing companies to add their logo, contact details, itemized lists, and promotional messages.
            </>
        ),
    },
    {
        id: 2,
        cls: "overview",
        title: "Project Highlights",
        feture_list: [
            <>Instant online payment acceptance without extra hardware.</>,
            <>Payments enabled via mobile or personal devices without bank card swiping.</>,
            <>Payable link feature to simplify and boost business growth.</>,
            <>Generates customizable receipts (paper or digital) with logos, contacts, and promotional messages.</>,
            <>Receipts sent through multiple channels, including WhatsApp, SMS, and email.</>,
        ],
        description: (
            <>
                The Paynet payment platform is designed for simplicity and efficiency. Key highlights include:
                <br /><br />
                - Instant payment setup with no extra hardware required.
                <br />
                - Flexible payment options through links for both buyers and sellers.
                <br />
                - Multi-channel receipt generation and distribution for convenience.
                <br />
                - Focused on enhancing the user experience for businesses and their customers.
            </>
        ),
    },
];


const project_details_content = {
   solution_title: "Solution & Result",
   des_1: (
      <>
         Paynet revolutionizes payment processing by eliminating the need for physical hardware while enabling instant online transactions. The platform’s user-centric design allows businesses to send payable links to customers, making the payment process seamless and efficient.
         <br /><br />
         With the ability to generate customizable receipts, Paynet enhances business branding and customer experience. Receipts can be tailored with company logos, itemized details, and promotional messages, ensuring a professional touch.
      </>
   ),
   des_2: (
      <>
         By enabling payments through mobile devices and personal gadgets, Paynet makes the checkout process quicker and more convenient. The system is scalable, allowing businesses of any size to manage payments effectively. With robust features like digital receipts and multi-channel sharing, Paynet has positioned itself as a game-changer in the payment industry.
      </>
   ),
}
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