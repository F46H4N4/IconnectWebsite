import img_1 from "../../public/assets/img/project/erp.png"
import img_2 from "../../public/assets/img/project/noriskpro.png"
import img_3 from "../../public/assets/img/project/paynet.png"

import author_img_1 from "../../public/assets/img/blog/blog-avata-1.png";
import author_img_2 from "../../public/assets/img/blog/blog-avata-2.png";
import author_img_3 from "../../public/assets/img/blog/blog-avata-3.png";

import img_4 from "../../public/assets/img/project/gym.png"
import img_5 from "../../public/assets/img/project/booking.png"
import img_6 from "../../public/assets/img/project/shop.png"
import brand_logo_1 from "../../public/assets/img/project/erp_logo.png";
import brand_logo_2 from "../../public/assets/img/project/noris_logo.png";
import brand_logo_3 from "../../public/assets/img/project/paynet_logo.png";



const blog_data = [
    // home 03 
    {
        id: 1, 
        img: img_1,
        // category: "Crm Software",
        // color: "1",
        // date: "28 April, 2023",
        logo:brand_logo_1,
        title: <>DietErp</>,
        slug:'dietErp',
        desc:'DietErp a comprehensive online platform for diet food delivery, enabling seamless meal planning, ordering, and delivery tailored to customer health goals.'
        // author_img: author_img_1,
        // author_name: "Hilary Ouse",
        // job_title: "Founder & CEO Dulalix"
    },
    {
        id: 2, 
        img: img_2,
        // category: "Sales Tools",
        // color: "2",
        // date: "28 April, 2023",
        logo:brand_logo_2,
        title: <>Norikspro</>,
        slug:'norikspro',
        desc:'Norikspro an advanced audit management platform to streamline auditing processes, ensuring accuracy, compliance, and efficient reporting for organizations'
        // author_img: author_img_2,
        // author_name: "Rudra Ghosh",
        // job_title: "Founder & CEO Dulalix"
    },
    {
        id: 3, 
        img: img_3,
        logo:brand_logo_3,

        // category: "Sales Management",
        // color: "3",
        // date: "28 April, 2023",
        slug:'paynet',
        title: <>Paynet</>,
        desc:'Paynet is a secure and scalable payment solution, enabling seamless transactions, multi-channel integration, and robust fraud prevention for businesses.'
        // author_img: author_img_3,
        // author_name: "Penny Tool",
        // job_title: "Founder & CEO Dulalix"
    },
       {
        id: 4, 
        img: img_4,
        // category: "Crm Software",
        // color: "1",
        // date: "28 April, 2023",
        slug:'gym',
        title: <>Gym</>,
        desc:'Gym is a comprehensive gym management system, streamlining membership tracking, scheduling, billing, and performance monitoring for fitness centers'
        // author_img: author_img_1,
        // author_name: "Hilary Ouse",
        // job_title: "Founder & CEO Dulalix"
    },
    {
        id: 5, 
        img: img_5,
        // category: "Sales Tools",
        // color: "2",
        // date: "28 April, 2023",
        slug:'booking-amiyon',
        title: <>Booking.amiyon</>,
        desc:'A versatile booking platform, simplifying reservation processes with real-time availability, secure payments, and user-friendly management tools'
        // author_img: author_img_2,
        // author_name: "Rudra Ghosh",
        // job_title: "Founder & CEO Dulalix"
    },
    {
        id: 6, 
        img: img_6,
        // category: "Sales Management",
        // color: "3",
        // date: "28 April, 2023",
        slug:'shopclick',
        title: <>Shop a Click</>,
        desc:'A feature-rich eCommerce platform, empowering businesses with seamless product management, secure payment integration, and a personalized shopping'
        // author_img: author_img_3,
        // author_name: "Penny Tool",
        // job_title: "Founder & CEO Dulalix"
    },

    // home 04
    {
        id: 4, 
        img: img_4,
        category: "Blog",
        color: "",
        date: "10 min",
        title: <>Building for the real world</>,
        description: <>How friends from college went on to build one powerful
        platform (hint: it was ours).</>,
        author_img: author_img_3,
        author_name: "Penny Tool",
        job_title: "Founder & CEO Dulalix"
    },
    {
        id: 5, 
        img: img_5,
        category: "Blog",
        color: "",
        date: "24 min",
        title: <>High Returns on Investment</>,
        description: <>How friends from college went on to build one powerful
        platform (hint: it was ours).</>,
        author_img: author_img_3,
        author_name: "Penny Tool",
        job_title: "Founder & CEO Dulalix"
    },

    // anything here


]
export default blog_data