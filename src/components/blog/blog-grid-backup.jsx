import React, { useState, useEffect } from "react";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import VideoArea from "@/src/components/homes/home-5/video-area"; // Assuming VideoArea is in the same directory

const BlogGrid = () => {
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    setIsLoop(true);
  }, []);

  const blogGridData = [
    {
      id: 1,
    //   bg_img: "/assets/img/blog/inner-blog-1.png",
      child_1: "Resources",
      date: "October 20, 2023",
      title: <>5 Companies doing Brand <br /> Marketing Right</>,
      des: <>From publishing content and hoping to acquire leads to 
            gaining audience insights and making personalized 
            content, content marketing.</>,
    //   author_img: "/assets/img/blog/blog-avata-3.png",
    //   author_name: "Hilary Ouse",
    //   author_info: "Founder & CEO Dulalix",
    },
    // Add more blog grid data here...
  ];

  return (
  <div className="video-wrapper" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Video */}
      <VideoArea
        src="/assets/rounds.mp4"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "1200px",
          height: "auto",
          objectFit: "cover",
        }}
        className="background-video"
      />

      {/* Blog Grid Content */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-grid-arrow p-relative">
              <Swiper
                slidesPerView={1}
                effect="fade"
                navigation={{
                  nextEl: ".grid-next",
                  prevEl: ".grid-prev",
                }}
                loop={isLoop}
                modules={[Navigation, EffectFade]}
                className="swiper-container blog-grid-slider-active"
              >
                {blogGridData.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div
                      className="blog-grid-slider blog-grid-slider-bg d-flex align-items-center"
                      style={{
                        backgroundImage: `url(${item.bg_img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="blog-grid-slider-wrapper">
                        <div className="blog-grid-slider-meta">
                          <span className="child-one">{item.child_1}</span>
                          <span className="child-two">{item.date}</span>
                        </div>
                        <div className="blog-grid-slider-title-box">
                          <h4 className="blog-grid-slider-title">
                            <Link href="/blog-details">{item.title}</Link>
                          </h4>
                          <p>{item.des}</p>
                        </div>
                        <div className="tp-blog-author-info-box d-flex align-items-center">
                          <div className="tp-blog-avata">
                            <Image src={item.author_img} alt={item.author_name} />
                          </div>
                          <div className="tp-blog-author-info">
                            <h5>{item.author_name}</h5>
                            <span>{item.author_info}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
