import React, { useEffect, useState } from 'react';
import useBreadcrumbTitleAnime from "@/src/hooks/useBreadcrumbTitleAnime";
import Link from 'next/link';

const BreadcrumbEight = () => {
   const { animeRef } = useBreadcrumbTitleAnime();
   const [displayedText, setDisplayedText] = useState('');

   const text = "Norikspro: Tailored financing solutions designed for your success.";

   useEffect(() => {
      let i = 0;
      const typingEffect = setInterval(() => {
         if (i < text.length) {
            // Use setState with a function to ensure no repetition
            setDisplayedText(prevText => text.slice(0, i + 1));
            i++;
         } else {
            clearInterval(typingEffect);
         }
      }, 50);

      return () => {
         clearInterval(typingEffect);
      };
   }, [text]);

   return (
      <>
         <div
            className="breadcrumb__area breadcrumb-height-3 p-relative fix"
            style={{
               height: '571px',
               overflow: 'hidden',
               position: 'relative',
            }}
         >
            <video
               autoPlay
               muted
               loop
               style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '571px',
                  objectFit: 'cover',
                  zIndex: -2,
               }}
            >
               <source src="/assets/kfic.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>

            <div
               style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '571px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: -1,
               }}
            ></div>

            <div className="container">
               <div className="breadcrumb__content-wrap">
                  <div className="row justify-content-center">
                     <div className="col-xl-12">
                        <div className="breadcrumb__content z-index-3 mb-60">
                      <div className="breadcrumb__text wow tpfadeIn" data-wow-duration=".9s" data-wow-delay=".6s">
                        <span><img src="assets/img/logo/noris_logo.png" alt="theme pure"/>
                           {/* <Link href="#" className="text-white" style={{ lineHeight: '1.6', marginLeft: '10px' }}>
                              See Live
                           </Link> */}
                        </span>
                     </div>
                           <h3 ref={animeRef} className="breadcrumb__title anime_text">
                            Norikspro
                           </h3>
                           <div
                              className="breadcrumb__text wow tpfadeIn"
                              data-wow-duration=".9s"
                              data-wow-delay=".6s"
                           >
                              <h6
                                 style={{
                                    color: 'white',
                                    lineHeight: '1.8',
                                    fontSize: '18px',
                                    fontWeight: 'normal',
                                    width: '100%',
                                    maxWidth: '800px',
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word',
                                    overflow: 'hidden',
                                 }}
                                 className="typewriter-text"
                              >
                                 {displayedText}
                                 <span className="cursor">|</span>
                              </h6>
                           </div>
                        
                        </div>
                     </div>
                  </div>
               </div>
               <Link href="https://www.noriskpro.com/"
                   style={{
                     color: '#ffffff',
                     fontWeight: 'bold',
                     textDecoration: 'none',
                     border: '2px solid white',
                     padding: '10px 20px',
                     textAlign: 'center',
                     display: 'inline-block',
                     borderRadius: '30px',
                     transition: 'all 0.3s ease', // Smooth transition for hover effect
                  }}
                  className="custom-link"
                  >
                  See Live
                  </Link>
            </div>
         </div>

         <style jsx>{`
            .cursor {
               animation: blink 0.7s infinite;
               margin-left: 2px;
               font-weight: bold;
            }

            @keyframes blink {
               0%, 100% {
                  opacity: 1;
               }
               50% {
                  opacity: 0;
               }
            }
         `}</style>
      </>
   );
};

export default BreadcrumbEight;