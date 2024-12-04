import VideoPopup from '@/src/modals/video-popup';
import React,{useState} from 'react';

// const company_content ={
//     sub_title:  "ABOUT THE COMPANY",
//     title: <>Softuch is Made <br />For the Creator.</>,
//     info_1: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu tellus mattis quis. Eu, tempus donec nam mauris egestas. Id aliquet ultricies ligula tellus arcu dolor. Massa arcu pulvinar in mattis</>,
//     info_2: <>Feugiat purus congue risus, blandit a sed. In aenean quam aenean purus dictum pellentesque consequat.!</>,
//     info_3: <>Our clean and simple APIs and transparent SaaS model will give you complete peace of mind.</>,
// }
// const {sub_title, title, info_1, info_2, info_3}  = company_content


const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
       <>
         <div className="trust row align-items-center justify-content-center"   style={{
          maxWidth: '710px', // Restrict the width
          margin: '0 auto', // Center align the container
          textAlign: 'center', // Center text alignment for children
          background: 'white',
          padding: '20px',
          boxSizing: 'border-box',
         color: "#620AD0",
         //  paddingBottom :"74px"
          
        }}
      >
         <div className="col-md-4 col-sm-4 p-0">
            <div className="ab-company-fun-fact-wrap d-flex flex-column justify-content-center align-items-center text-center">
               <div className="ab-company-fun-fact" style ={{ color:"#620AD0"}}>
               <span>Trusted by</span>
               <h4>100<em>+</em></h4>
               <p>Clients</p>
               </div>
            </div>
         </div>

         <div className="col-md-4 col-sm-4 p-0">
            <div className="ab-company-fun-fact-wrap d-flex flex-column justify-content-center align-items-center text-center">
               <div className="ab-company-fun-fact" style ={{ color:"#620AD0"}}>
               <span>Experience in</span>
               <h4>50<em>+</em></h4>
               <p>Industries</p>
               </div>
            </div>
         </div>

         <div className="col-md-4 col-sm-4 p-0">
            <div className="ab-company-fun-fact-wrap d-flex flex-column justify-content-center align-items-center text-center">
               <div className="ab-company-fun-fact" >
               <span>IN</span>
               <h4>24<em>/</em>7</h4>
               <p>Support</p>
               </div>
            </div>
         </div>
         </div>

             {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;