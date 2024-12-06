import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    // Video autoplay logic
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        if (error.name === "NotAllowedError") {
          videoRef.current.muted = true;
          videoRef.current.play().catch(e => console.error(e));
        }
      });

      const handleVideoEnd = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(e => console.error(e));
        }
      };

      videoRef.current.addEventListener('ended', handleVideoEnd);

      // Text animation with ScrollTrigger
      if (contentRef.current && headingRef.current && paragraphRefs.current.length) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top center",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(
          paragraphRefs.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top center",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Cleanup
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', handleVideoEnd);
        }
      };
    }
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="responsive-video"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src="/assets/7021937_Connection_Cyberspace_1920x1080.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay to improve text readability */}
      <div className="gradient-overlay"></div>

      {/* Content overlay on video */}
      <div ref={contentRef} className="overlay-content">
        <div className="content-wrapper">
          <h2 ref={headingRef}>Who We Are</h2>
          {[
            "iConnect is a leading technology solutions provider in Kuwait, delivering cutting-edge IT services, hardware solutions, and digital products tailored for your business success.",
            "With <strong>10+ years of experience</strong>, <strong>50+ projects completed</strong>, and <strong>99% customer satisfaction</strong>, we drive growth with innovation and commitment."
          ].map((text, index) => (
            <p
              ref={el => paragraphRefs.current[index] = el}
              key={index}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .video-container {
          position: relative;
          width: 100%;
          max-width: 1290px;
          aspect-ratio: 16 / 9;
          margin: 20px auto;
          overflow: hidden;
          border-radius: 30px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .responsive-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent 70%);
        }

        .overlay-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .content-wrapper {
          text-align: center;
          max-width: 800px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 15px;
        }

        h2 {
          font-weight: bold;
          color: #ff9800;
          margin-bottom: 15px;
        }

        p {
          font-size: 18px;
          line-height: 1.6;
          margin: 10px 0;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 768px) {
          .video-container {
            border-radius: 20px;
          }

          .content-wrapper {
            padding: 15px;
            background: rgba(0, 0, 0, 0.5);
          }

          h2 {
            font-size: 24px;
            margin-bottom: 10px;
          }

          p {
            font-size: 16px;
            line-height: 1.5;
          }
        }

        @media (max-width: 480px) {
          .video-container {
            width: 100%;
            border-radius: 15px;
          }

          .content-wrapper {
            padding: 10px;
            background: rgba(0, 0, 0, 0.6);
          }

          h2 {
            font-size: 20px;
          }

          p {
            font-size: 14px;
            line-height: 1.4;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
