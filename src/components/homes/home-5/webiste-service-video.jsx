import { useEffect, useRef } from 'react';

const ServiceVideo = ({ src, poster, style, className }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Try to play the video
      videoRef.current.play().catch((error) => {
        if (error.name === 'NotAllowedError') {
          videoRef.current.muted = true; // Mute if autoplay isn't allowed
          videoRef.current.play().catch((e) => console.error(e));
        }
      });

      // Replay video after it ends
      const handleVideoEnd = () => {
        videoRef.current.play().catch((e) => console.error(e));
      };

      videoRef.current.addEventListener('ended', handleVideoEnd);

      // Cleanup listener on unmount
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', handleVideoEnd);
        }
      };
    }
  }, []);

  return (
    <div style={{ ...defaultStyle, ...style }} className={`video-container ${className}`}>
      <video
        ref={videoRef}
        className="responsive-video"
        autoPlay
        muted
        playsInline
        loop
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Styles */}
      <style jsx>{`
        .video-container {
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .responsive-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

const defaultStyle = {
  width: '372px',
  height: '500px',
};

export default ServiceVideo;
