import React, { useEffect, useState, useRef } from 'react';

const about_content = {
  image_texts: [
    "10+ years of Experience",
    "99% Customer Satisfaction", 
    "50+ projects completed"
  ],
};

const AboutArea = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const aboutRef = useRef(null);
  const preventScrollRef = useRef(true);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (preventScrollRef.current && aboutRef.current && aboutRef.current.contains(e.target)) {
        e.preventDefault();

        if (!isScrollingRef.current) {
          isScrollingRef.current = true;

          setActiveIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex >= about_content.image_texts.length) {
              preventScrollRef.current = false;
              return prevIndex;
            }
            return nextIndex;
          });

          setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        }
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      id="about-section"
      ref={aboutRef}
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        BoxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'


      }}
    >
      {/* Background Video */}
     <video
        src="/assets/earth.mp4"
        autoPlay
        loop
        muted
        style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: -1,
            filter: 'brightness(80%)', // Optional: Reduce brightness for contrast
            boxShadow: '0 0 50px 20px rgba(0, 0, 0, 0.8)', // Add shadow to video

        }}
        />

      {/* Content Container */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        {/* Heading with Typing Animation */}
        <div
          className="typing-animation"
          style={{
            color: '#fff',
            fontSize: '55px',
            fontWeight: 'normal',
            zIndex: 2,
            textAlign: 'left',
            marginBottom: '20px',
          }}
        >
          <span>Who We Are</span>
        </div>

        {/* Main Content Area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            gap: '40px',
          }}
        >
          {/* Paragraph Content on the Left with Slide-In Animation */}
          <div
            className="slide-in-left"
            style={{
              flex: 1,
              textAlign: 'left',
            }}
          >
            <p style={{ 
              fontSize: '18px', 
              color: '#fff', 
              lineHeight: '1.6',
              textAlign: 'justify',
              width: '500px'
            }}>
   iConnect, a leading tech provider in Kuwait, delivers innovative IT services, hardware, and electronic solutions. We specialize in software, mobile apps, digital platforms, payment solutions, e-commerce, CCTV, and biometric systems. Our scalable solutions enhance efficiency, security, and growth, showcasing a commitment to excellence and innovation.            </p>
          </div>

          {/* Fixed Text Content on the Right */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              right: '10%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              zIndex: 2,
              height: '100px',
            }}
          >
            {about_content.image_texts.map((text, i) => {
              const parts = text.split(' ');
              const firstPart = parts[0];
              const restOfText = parts.slice(1).join(' ');

              return (
                <div
                  key={i}
                  className={`tp-about__text-wrapper ${activeIndex === i ? 'active' : ''}`}
                  style={{
                    position: 'absolute',
                    opacity: activeIndex === i ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                    zIndex: activeIndex === i ? 10 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    // paddingRight:'20px'
                  }}
                >
                  <div style={{ 
                    fontSize: '100px', 
                    color: '#fff', 
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                  }}>
                    {firstPart}
                  </div>
                  <p style={{ 
                    fontSize: '24px', 
                    color: '#fff', 
                    lineHeight: '1.6' 
                  }}>
                    {restOfText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Global CSS */}
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
          opacity: 0;
        }

        .typing-animation {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          width: 0;
          animation: typing 2s steps(30) 1s forwards;
          animation-fill-mode: forwards;
        }

        @media (max-width: 768px) {
          #about-section {
            position: relative;
            height: auto;
            padding: 50px 20px;
          }

          .typing-animation {
            font-size: 24px;
            text-align: center;
          }

          .slide-in-left p {
            font-size: 16px;
            width: 100%;
            text-align: center;
          }

          .tp-about__text-wrapper {
            position: relative;
            right: 0;
            text-align: center;
            font-size: 28px;
          }

          .tp-about__text-wrapper div {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutArea;
