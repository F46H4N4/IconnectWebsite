'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ServiceArea = () => {
  const sectionRef = useRef(null); // Reference for the entire section
  const headingRef = useRef(null); // Reference for the heading
  const paragraphRef = useRef(null); // Reference for the paragraph

  useEffect(() => {
    // Ensure text is immediately visible before animation
    gsap.set([headingRef.current, paragraphRef.current], { opacity: 1 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.5 } }); // Faster animations

          // Slide-up animation for heading
          tl.fromTo(
            headingRef.current,
            { y: 30, opacity: 0 }, // Animation starts with 0 opacity
            { y: 0, opacity: 1 } // Ends with full visibility
          );

          // Slide-up animation for paragraph
          tl.fromTo(
            paragraphRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, delay: 0.1 }
          );

          observer.disconnect(); // Disconnect after animation
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <div
      className="centralized-content"
      ref={sectionRef}
      style={{
        width: '100%',
        maxWidth: '806px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
        paddingTop: '74px',
      }}
    >
      <div
        className="heading"
        ref={headingRef}
        style={{
          fontWeight: 'bold',
          lineHeight: '1.2',
          fontSize: '50px',
          fontFamily: 'Plus Jakarta Sans',
          color: 'black',
        }}
      >
        Our Impact!
      </div>
      <div
        className="content"
        ref={paragraphRef}
        style={{
          fontWeight: '400',
          lineHeight: '1.5',
          fontSize: '20px',
          marginTop: '10px',
        }}
      >
       At iConnect, we offer innovative IT solutions and secure services that enhance operations and improve customer experiences, enabling businesses to thrive in a digital world.
      </div>
      <style jsx>{`
        .centralized-content .heading {
          font-size: 10vw;
        }
        .centralized-content .content {
          font-size: 4vw;
        }

        @media (min-width: 768px) {
          .centralized-content .heading {
            font-size: 82.5px;
          }
          .centralized-content .content {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceArea;
