import React from 'react';
import Image from 'next/image';
import useBreadcrumbTitleAnime from "@/src/hooks/useBreadcrumbTitleAnime";

// spahe import here 
import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2-2.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-sub-2.png";
import shape_3 from "../../../public/assets/img/breadcrumb/breadcrumb-sub-3.png";


const BreadcrumbTen = () => {
   const { animeRef } = useBreadcrumbTitleAnime();

   return (
      <div
         style={{
            backgroundImage: `url('/assets/img/products/productbg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '410px', // Fixed height for the image
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingBottom:'74px'
         }}
      >
        <div className="breadcrumb__content z-index-3 text-center">
                           <h3 ref={animeRef} className="breadcrumb__title tp-char-animation text-black anime_text" style={{ color:'white !important',fontSize:'70px !important' }}>Electronics</h3>
                           <div className="breadcrumb__text wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".6s">
                              {/* <p>We have an experienced team of production and inspection personnel <br /> to ensure quality.</p> */}
                           </div>
                        </div>
      </div>
   );
};


export default BreadcrumbTen;