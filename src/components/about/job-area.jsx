import ClockIcon from '@/src/svg/clock-icon';
import LocationIconThree from '@/src/svg/location-icon-3';
import Link from 'next/link';
import React from 'react';

const job_data = {
    sub_title: "Become part of our team",
    title: <>Current Openings.</>,
    carrer_title: "Become part of our team",
    carrer_info: <>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque tristique <br/>
    Et amet risus enim accumsan sit purus sit.</>,
    job_info: [
        {
            id:1, 
            category: "Product Designer",
            job_time: "3 Years of Experience",
            job_location: "Koratty Infopark, Kerala",
        },
        {
            id:2, 
            category: "UI/UX Designer",
            job_time: "2 Years of Experience",
            job_location: "Koratty Infopark, Kerala",
        },
        {
            id:3, 
            category: "Graphic Designer",
            job_time: "1 Years of Experience",
            job_location: "Koratty Infopark, Kerala",
        },
        {
            id:4, 
            category: "Marketing Specialist",
            job_time: "2 Years of Experience",
            job_location: "Koratty Infopark, Kerala",
        },
        {
            id:5, 
            category: "Php Laravel",
            job_time: "4 Years of Experience",
            job_location: "Koratty Infopark, Kerala",
        },


    ]

}
const {sub_title, carrer_info, title, carrer_title, job_info}  = job_data


const JobArea = ({style_carrer}) => {
    return (
        <>
            <div className="job-area pt-120 pb-120">
               <div className="container"> 
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="job-section-box text-center mb-40">
                           {style_carrer ? 
                              <>
                              <h3 className="tp-section-title">{carrer_title}</h3>
                              <p>{carrer_info}</p>
                              </> 
                              : 
                              <>
                               <h3 className="tp-section-title">{title}</h3>
                               <h4 className="inner-section-subtitle" style={{ color:"black" }}>{sub_title}</h4>

                              </>

                           }
                        </div>
                     </div>
                  </div>
                  {job_info.map((item, i)  => 
                    <div key={i} className="job-post-box">
                     <div className="row align-items-center">
                        <div className=" col-lg-5 col-md-4">
                           <div className="job-post-info d-flex justify-content-start align-items-center">
                              <div className="job-post-category">
                                 <span>{item.category}</span>
                              </div>
                           </div>
                        </div>
                        <div className=" col-lg-4 col-md-5">
                           <div className="job-post-wrapper d-flex align-items-center">
                              <div className="job-post-time d-flex align-items-center">
                                  <ClockIcon />
                                 <span>{item.job_time}</span>
                              </div>
                              <div className="job-post-location d-flex align-items-center">
                                 <LocationIconThree />
                                 <span>{item.job_location}</span>
                              </div>
                           </div>
                        </div>
                        <div className=" col-lg-3 col-md-3">
                        <div className="job-post-apply-btn text-start text-md-end">
                           <a
                              className="tp-btn-inner tp-btn-hover alt-color-orange"
                              href={`mailto:arathi@iconnect-kw.com?subject=Job Application - ${item.category}&body=Dear Sir/Madam,%0D%0A%0D%0AI am interested in applying for the position of ${item.category}. Below are the details:%0D%0A%0D%0AJob Title: ${item.category}%0D%0AJob Location: ${item.job_location}%0D%0A%0D%0AThank you for considering my application.%0D%0A%0D%0ARegards,%0D%0AYour Name`}
                           >
                              <span>Apply</span>
                              <b></b>
                           </a>
                        </div>
                     </div>
                     </div>
                  </div>                    
                    )
                  } 
               </div>
            </div>
        </>
    );
};

export default JobArea;