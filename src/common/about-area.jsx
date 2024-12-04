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
        width: '100%',
        overflow: 'hidden',
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
          zIndex: -1,
          filter: 'brightness(80%)',
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
        {/* Heading */}
        <div className="typing-animation">
          <span>Who We Are</span>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <p>
            iConnect, a leading tech provider in Kuwait, delivers innovative IT services, hardware, and electronic solutions. We specialize in software, mobile apps, digital platforms, payment solutions, e-commerce, CCTV, and biometric systems. Our scalable solutions enhance efficiency, security, and growth, showcasing a commitment to excellence and innovation.
          </p>
        </div>
      </div>

      {/* Global CSS */}
      <style jsx global>{`
        @media (max-width: 768px) {
          #about-section {
            height: auto;
            padding: 50px 20px;
          }

          .typing-animation span {
            font-size: 24px;
          }

          .main-content p {
            font-size: 16px;
            width: 100%;
          }
        }

        .typing-animation span {
          font-size: 55px;
          color: #fff;
          font-weight: normal;
          white-space: nowrap;
          overflow: hidden;
          animation: typing 2s steps(30) 1s forwards;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .main-content p {
          font-size: 18px;
          color: #fff;
          line-height: 1.6;
          text-align: justify;
        }
      `}</style>
    </div>
  );
};

export default AboutArea;
