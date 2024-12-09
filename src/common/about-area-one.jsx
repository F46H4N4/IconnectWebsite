import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// Images import
import about_img_1 from "../../public/assets/img/about/about-bg-one.png";
import about_img_3 from "../../public/assets/img/about/blocks.png";

// About data
const about_data = [
  {
    id: 1,
    cls: "bg-img",
    img: about_img_1,
  },
  {
    id: 2,
    cls: "sub-img", // Apply animation only to this image
    img: about_img_3,
  },
];

// About content
const about_content = {
  title: "Our Premium Brand",
  sub_title: "Premium Toner Cartridges",
  des: (
    <>
      Spark Premium Toner Cartridges, designed to <br />
      meet the highest standards of printing quality and <br />
      reliability.
    </>
  ),
  about_list: [
    <>Full Warranty Support.</>,
    <>Eco-Friendly Commitment.</>,
    <>Exceptional Customer Support.</>,
    <>Wide Compatibility.</>,
  ],
  btn_text: "View Details",
};

const { title, sub_title, des, about_list, btn_text } = about_content;

const AboutArea = () => {
  return (
    <>
      <div className="tp-about__area tp-about__pt-pb" style={{ paddingTop: '74px' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Images Section */}
            <div
              className="col-xl-6 col-lg-6 col-md-12 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".2s"
            >
              <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                {about_data.map((item, i) => (
                  <div
                    key={i}
                    className={`tp-about__${item.cls}`}
                    style={{
                      position: i === 0 ? "relative" : "absolute",
                      top: i === 1 ? "50%" : "0",
                      left: i === 1 ? "50%" : "0",
                      transform: i === 1 ? "translate(-50%, -50%)" : "none",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt="theme-pure"
                      style={{
                        maxWidth: i === 1 ? "100%" : "auto",
                        maxHeight: i === 1 ? "100%" : "auto",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div
              className="col-xl-6 col-lg-6 col-md-12 wow tpfadeRight text-center text-md-start"
              data-wow-duration=".9s"
              data-wow-delay=".6s"
            >
              <div className="tp-about__right">
                <div className="tp-about__section-box">
                  <h4 className="tp-section-subtitle" style={{ color: "#000000" }}>{title}</h4>
                  <h3 className="tp-section-title mb-15">{sub_title}</h3>
                  <p>{des}</p>
                </div>
                <div className="tp-about__list">
                  <ul>
                    {about_list.map((item, i) => (
                      <li key={i}>
                        <i className="fal fa-check"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tp-about__btn">
                  <Link
                    className="tp-btn tp-btn-hover alt-color-black"
                    href="/assets/finalToner.pdf"
                  >
                    <span>{btn_text}</span>
                    <b></b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   <style jsx>{`
  /* Original dimensions for larger screens */
  .tp-about__img-wrapper {
    position: relative;
    width: 576.7px;
    height: 442.64px;
  }

  .tp-about__sub-img {
    width: 468px;
    height: 515.63px;
    animation: float-animation 3s ease-in-out infinite;
  }

  @keyframes float-animation {
    0%,
    100% {
      transform: translate(-50%, -50%) translateY(0);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-10px);
    }
  }

  /* Adjustments for medium screens */
  @media (max-width: 1200px) {
    .tp-about__img-wrapper {
      width: 480px;
      height: 368px;
    }

    .tp-about__sub-img {
      width: 390px;
      height: 430px;
    }
  }

  /* Adjustments for small screens */
  @media (max-width: 768px) {
    .tp-about__img-wrapper {
      width: 100%;
      height: auto;
    }

    .tp-about__sub-img {
      width: 70%;
      height: auto;
      margin: auto;
    }

    .tp-about__section-box {
      text-align: center;
    }

    .tp-about__list {
      margin: 20px auto;
    }

    .tp-about__btn {
      margin: 20px auto;
    }
  }

  /* Further adjustments for very small screens */
  @media (max-width: 576px) {
    .tp-about__sub-img {
      width: 100%;
      height: auto;
    }
  }
`}</style>

    </>
  );
};

export default AboutArea;
