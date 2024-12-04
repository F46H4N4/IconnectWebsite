import VideoPopup from '@/src/modals/video-popup';
import React,{useState} from 'react';

const company_content ={
   //  sub_title:  "ABOUT THE COMPANY",
    title: <>IConnect is Designed to Elevate Your Digital <br></br>Journey</>,
    info_1: <></>,
    info_2: <>IConnect has been empowering businesses for over a decade with comprehensive solutions across hardware, software, and electronics. From advanced web applications and custom mobile apps to innovative hardware and electronic systems, we provide end-to-end services tailored to your needs. Our mission is to blend creativity, technology, and expertise to deliver exceptional results, helping businesses grow, streamline operations, and stay ahead in the ever-evolving digital landscape.</>,
    info_3: <></>,
}
const {sub_title, title, info_1, info_2, info_3}  = company_content


const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className="ab-company-area pt-50" style = {{ background : 'white' }}>
               <div className="container">
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6">
                        <div className="ab-company-section-box">
                           <h4 className="inner-section-subtitle">{sub_title}</h4>
                           <h3 className="tp-section-title">{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="ab-company-right">
                           <div className="ab-company-section-text">
                              <p className="pb-10">{info_1}</p>
                              <p className="pb-10">{info_2}</p>
                              <p><span>{info_3}</span></p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xl-4">
                        {/* <div className="ab-company-video">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fas fa-play"></i></a>
                           <span>Watch Demo</span>
                        </div> */}
                     </div>
                     {/* <div className="col-xl-8">
                        <div className="row">

                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                                 <div className="ab-company-fun-fact">
                                    <span>Trusted by</span>
                                    <h4>100<em>+</em></h4>
                                    <p>Clients</p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>Experience in</span>
                                    <h4>50<em>+</em></h4>
                                    <p>Industries</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>In</span>
                                    <h4>24<em>/</em>7</h4>
                                    <p>Support</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>

             {/* video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      /> */}
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;