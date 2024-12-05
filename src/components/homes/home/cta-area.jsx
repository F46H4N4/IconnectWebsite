import React from 'react';
import Image from 'next/image';
import plan_img_1 from "../../../../public/assets/img/feature/buisness_meeting.png";

const cta_content = {
  img_box: [
    { id: 1, img: plan_img_1, cls: "1" },
  ],
  title: (
    <>
      Driving Growth with Smart Strategies
    </>
  ),
  des: (
    <>
      At iConnect, we empower businesses with customized solutions designed for tomorrow. Partnering with SMEs, we drive growth, enhance efficiency, and address unique needs with tailored strategies. Our expertise focuses on mitigating risks and helping businesses thrive in competitive markets.

With a deep understanding of industry trends and technological advancements, we deliver scalable solutions that adapt to evolving demands. From streamlining operations to fortifying digital security, our services are built to foster innovation and resilience. At iConnect, we’re not just a service provider – we’re your strategic ally in navigating challenges and seizing opportunities for long-term success
    </>
  ),
};

const { img_box, title, des } = cta_content;

const CtaArea = () => {
  return (
    <div
      className="tp-plan-area tp-plan-space"
      style={{
        background: "white",
        display: "flex",
        justifyContent: "flex-start",  // Align to the left
        alignItems: "center",          // Center vertically
        // height: "100vh",               // Ensure full viewport height
        paddingLeft: "5%",             // Add left padding to shift content to the right
        paddingRight: "5%",
        paddingTop:'74px'// Add right padding for symmetry
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Text Content Section */}
          <div
            className="col-xl-5 col-lg-5 order-2 order-lg-1 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s" style={{ width:"793px" }}
          >
            <div className="tp-plan-section-box">
              <h3
                className="tp-section-title-5 text-black pb-15"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  lineHeight: "1.5",
                  fontSize: "36px",
                  marginBottom: "20px",
                  maxWidth: "736px",
                }}
              >
                {title}
              </h3>
              <p
                className="mb-0 pb-30"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#333",
                  marginBottom: "30px",
                  maxWidth: "736px",
                  textAlign: "justify",
                }}
              >
                {des}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="col-xl-7 col-lg-7 order-1 order-lg-2 wow tpfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s" style={{ width:"393px" }}
          >
            <div className="tp-plan-img-box p-relative">
              {img_box.map((item, i) => (
                <div key={i} className={`tp-plan-img-${item.cls}`}>
                  <Image
                    src={item.img}
                    alt="plan image"
                    width={393}   // Fixed width
                    height={425}  // Fixed height
                    style={{
                      borderRadius: "20px",
                      objectFit: "cover", // Ensure the image maintains its aspect ratio
                      width: "100%",       // Ensure full width of container
                      height: "auto",      // Maintain aspect ratio
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


  <style jsx>{`
  @media (max-width: 1200px) {
    .tp-plan-img-box {
      padding-left: 0;  // Adjust padding for medium screens
    }
    .container {
      padding-left: 10%;  // Add more left padding on medium screens
      padding-right: 10%; // Add more right padding for symmetry
    }
    .tp-plan-section-box {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    .tp-plan-area {
      height: auto; // Remove full height for smaller screens
      padding-left: 10%;
      padding-right: 10%;
    }
    .container {
      padding-left: 5%; // Reduce padding on smaller screens
      padding-right: 5%;
    }
    .col-xl-5, .col-lg-5, .col-xl-7, .col-lg-7 {
      text-align: center;  // Center content on smaller screens
    }
    .tp-plan-section-box {
      text-align: center;
    }
    .tp-plan-img-box {
      margin-top: 30px;
    }
  }

  @media (max-width: 576px) {
    .tp-plan-area {
      padding-left: 0;
      padding-right: 0;
    }
    .container {
      padding-left: 0;
      padding-right: 0;
    }
    .tp-plan-img-box {
      padding-left: 0;  // Adjust for small screens
    }
  }
`}</style>

export default CtaArea;

