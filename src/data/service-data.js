import ServiceIconOne from "../svg/service/service-icon-1"
import ServiceIconTwo from "../svg/service/service-icon-2"
import ServiceIconThree from "../svg/service/service-icon-3"
import ServiceIconFoure from "../svg/service/service-icon-4"
import ServiceIconFive from "../svg/service/service-icon-5"
import ServiceIconsix from "../svg/service/service-icon-6"
import ServiceIconSeven from "../svg/service/service-icon-7"

// images import  
import img_1 from "../../public/assets/img/service/vector.png";
import img_2 from "../../public/assets/img/service/uiux.png";
import img_3 from "../../public/assets/img/service/Vectorthree.png";
import img_4 from "../../public/assets/img/service/Vectorfour.png";
import img_5 from "../../public/assets/img/service/appicon.png";
// for home 04
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png"
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png"
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png"
import icon_4 from "../../public/assets/img/service/sv-icon-4-4.png"

// for home 05
import img_6 from "../../public/assets/img/service/Vectorsix.png";
import img_7 from "../../public/assets/img/service/Vectorseven.png";
import img_8 from "../../public/assets/img/service/Vectoreight.png";
import img_9 from "../../public/assets/img/service/Vectornine.png";

// import img_10 from "../../public/";
// import img_11 from "../../public/";
// import img_12 from "../../public/";
// import img_13 from "../../public/";
// import img_14 from "../../public/";
// import img_15 from "../../public/";




const  service_data = [
    // for home 01 
    {
        id: 1,
        icon: img_1,
        // img: img_1,
        title: "Secure, flexible payment systems.",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".4s",
    },
    {
        id: 2,
        icon: img_2,
        img: img_2,
        title: "Simplify management, enhance efficiency.",
        // description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".6s",
    },
    {
        id: 3,
        icon: img_3,
        img: img_3,
        title: "Sell smarter with tailored solutions.",
        // description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".7s",
    },
    {
        id: 4,
        icon: img_4,
        img: img_4,
        title: "Modern websites for your growth.",
        // description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".8s",
    },
    {
        id: 5,
        icon: img_6,
        img: img_6,
        title: "Custom mobile apps, built smartly.",
        // description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
      {
        id: 6,
        icon: img_6,
        img: img_6,
        title: "Advanced security for home & business.",
        // description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
    {
        id: 7,
        icon: img_6,
        img: img_6,
        title: "Streamline operations, boost success..",
        // description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },

    // for home 03
    {
        id: 6,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "Project management jamil",
        // description: <>Automate Workflows <br /> and Monitor your Sales.</>,
        delay: ".9s",
    },
    {
        id: 7,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: "Sales analytics",
        // description: <>Track your Marketing to see the best Results.</>,
        delay: ".9s",
    },
    {
        id: 8,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: "Easy Invoicing",
        description: <>Automate recurring invoices and save time.</>,
        delay: ".9s",
    },
    {
        id: 9,
        icon: <ServiceIconFoure/>,
        img: <ServiceIconFoure />,
        title: "Complete Visibility",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
    
    // for home 04
    {
        id: 10,
        icon: icon_1,
        img: icon_1,
        title: "Cyber Security Solustions jamil",
        sub_title: "Cloud Backup",
        cls: "1",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
    {
        id: 11,
        icon: icon_2,
        img: icon_2,
        title: "AI Data Cloud Solution",
        sub_title: "Cloud Backup",
        cls: "2",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
    {
        id: 12,
        icon: icon_3,
        img: icon_3,
        title: <>Managed <br /> Web Application</>,
        sub_title: "Cloud Backup",
        cls: "3",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
    {
        id: 13,
        icon: icon_4,
        img: icon_4,
        title: "24//7 Customer Support",
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },

    // for home 05
    {
        id: 14,
        icon: img_6,
        img: img_6,
        title: <>Live Inventory <br /> Management</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },
    {
        id: 15,
        icon: img_8,
        // img: img_7,
        title: <>Real-time Master <br />  Planning</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },
    {
        id: 16,
        icon: img_1,
        // img: <ServiceIconOne />,
        slug: 'paymentsolution',
        title: "PAYMENT SOLUTION",
        description: <>Secure, flexible payment systems.</>,
        delay: ".9s",
    },
    {
        id: 17,
        icon: img_2,
        // img: <ServiceIconTwo />,
        slug: 'ui',
        title: "UI/UX Design",
        description: <>Designing seamless experiences.</>,
        delay: ".9s",
    },
    {
        id: 18,
        icon: img_3,
        // img: <ServiceIconThree />,
        slug:'e-commerce',
        title: "E-COMMERCE",
        description: <>Sell smarter with tailored solutions.</>,
        delay: ".9s",
    },
    {
        id: 19,
        icon: img_4,
        // img: <ServiceIconFoure />,
        slug:'web-development',
        title: "WEB DEVELOPMENT",
        description: <>Modern websites for your growth.</>,
        delay: ".9s",
    },
    {
        id: 20,
        icon: img_5,
        // img: <ServiceIconFive />,
        slug: 'app_development',
        title: "APP DEVELOPMENT",
        description: <>Custom mobile apps, built smartly.</>,
        delay: ".9s",
    },
    {
        id: 21,
        icon: img_9,
        img: img_9,
        title: <>BUSINESS SOLUTION</>,
        slug: 'buisness',
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Streamline operations, boost success.</>,
        delay: ".9s",
    },
    
    {
        id: 22,
        icon: img_8,
        img: img_8,
        slug:'securitysolution',
        title: <>SECURITY SOLUTION</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Advanced security for home & business.</>,
        delay: ".9s",
    },
    {
        id: 23,
        icon: img_8,
        img: img_8,
        slug:'Billing System',
        title: <>BILLING SYSTEM</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Designed to analyze and drive company growth.</>,
        delay: ".9s",
    },
   
   

    // service page
 
  
   
 
    
  
    {
        id: 23,
        icon: img_6,
        // img: <ServiceIconsix />,
        title: "Safe Online Services",
        description: <>Online services to view company level.</>,
        delay: ".9s",
    },
    
    {
        id: 24,
        icon: img_7,
        // img: <ServiceIconSeven />,
        title: "Online marketing",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },


]
export default service_data