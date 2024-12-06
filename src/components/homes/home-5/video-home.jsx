import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const VideoArea = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } });
          
          tl.from('.centralized-content', { opacity: 0, duration: 1 });
          tl.fromTo(
            contentRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, delay: 0.3 }
          );

          observer.unobserve(contentRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
  }, []);

  return (
    <div
      className="centralized-content"
      style={{
        width: '100%',
        maxWidth: '750px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '40px',
        paddingTop: '74px',
        paddingBottom: '74px',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0,0,0,0.2)',
        marginTop: '20px',
      }}
    >
      <div
        ref={contentRef}
        className="content"
        style={{
          fontWeight: '300',
          fontSize: '34px',
          lineHeight: '1.5',
          fontFamily: 'var(--tp-ff-heading)',
          color: '#333',
        }}
      >
        <h2 style={{ fontWeight: 'bold', color: '#ff9800' }}>Who We Are</h2>
        <p style={{ fontSize: '18px', marginTop: '15px' }}>
          iConnect is a leading technology solutions provider in Kuwait, delivering cutting-edge IT services, hardware solutions, and digital products tailored for your business success.
        </p>
        <p style={{ fontSize: '18px', marginTop: '15px' }}>
          We specialize in software, mobile apps, high-quality security systems, and scalable solutions that drive efficiency, enhance productivity, and ensure robust growth.
        </p>
        <p style={{ fontSize: '18px', marginTop: '15px' }}>
          With over <strong>10+ years of experience</strong>, <strong>50+ projects completed</strong>, and <strong>99% customer satisfaction</strong>, we are committed to delivering excellence and long-lasting partnerships.
        </p>
      </div>
    </div>
  );
};

export default VideoArea;
