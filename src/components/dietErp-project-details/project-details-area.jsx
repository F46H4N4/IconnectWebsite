import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/madablock.png";
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
                DietErp is a food delivery platform tailored for individuals with specific dietary needs and food allergies. It allows users to customize their meals by excluding foods that may cause allergic reactions, ensuring a safe and healthy dining experience.
                <br /><br />
                The platform focuses on providing personalized meal options such as gluten-free, vegan, keto, and low-carb diets, making it easy for customers to stick to their health goals while enjoying delicious meals. Madaeats ensures a seamless ordering experience, making it convenient for users to receive meals that fit their dietary preferences.
            </>
        ),
    },
    {
        id: 2,
        cls: "overview", 
        title: "Project Highlights",
        feture_list: [
            <>Customizable meal options based on dietary preferences (gluten-free, vegan, keto, etc.).</>,
            <>Ability to filter and exclude allergens to ensure safe meal options.</>,
            <>Real-time order tracking for easy meal delivery management.</>,
            <>Comprehensive nutritional information available for every meal.</>,
            <>User-friendly interface that simplifies meal customization and ordering.</>,
        ],
        description: (
            <>
                DietErp provides the following key features:
                <br /><br />
                - Custom meal plans and orders that cater to specific dietary needs.
                <br />
                - A unique allergen filter to ensure that meals are free of any allergens that may trigger reactions.
                <br />
                - Real-time order tracking for a transparent delivery experience.
                <br />
                - Easy-to-use platform interface with meal categorization based on health goals.
                <br />
                - Nutritious and balanced meals, with detailed nutritional facts displayed for each meal.
            </>
        ),
    },
];

const project_details_content = { 
    solution_title: "Solution & Result",
    des_1: (
        <>
             DietErp was developed with the goal of providing a safe and convenient meal delivery service for those with dietary restrictions and food allergies. By allowing users to customize their meals and exclude allergens, Madaeats ensures a worry-free eating experience.
            <br /><br />
            The platform also offers a variety of diet-specific meal options, ensuring that everyone can find meals that match their health goals, whether it's for weight loss, muscle gain, or overall wellness.
        </>
    ),
    des_2: (
        <>
            The project received a positive reception, with users appreciating the ability to filter out allergens and the wide variety of healthy meal options. **Madaeats** has positioned itself as a leader in providing specialized meal delivery services, focusing on user safety, convenience, and dietary customization.
            <br /><br />
            The platform continues to grow, with plans to introduce more personalized options and expand its meal variety to cater to more specific dietary needs.
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