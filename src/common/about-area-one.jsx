import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// images import
import about_img_1 from "../../public/assets/img/about/about-bg-one.png";
import about_img_3 from "../../public/assets/img/about/aboutoneblocks.png";

// about data
const about_data = [
  {
    id: 1,
    cls: "main-img",
    img: about_img_1,
  },
  {
    id: 2,
    cls: "sub-img",
    img: about_img_3,
  },
];

// about content
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
      <div className="tp-about__area tp-about__pt-pb" style={{ paddingTop:'74px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
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
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".6s"
            >
              <div className="tp-about__right">
                <div className="tp-about__section-box">
                  <h4 className="tp-section-subtitle"  style={{ color:"#000000" }}>{title}</h4>
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
                    href="/about"
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
        .tp-about__img-wrapper {
          position: relative;
        }
        .tp-about__sub-img {
          width: 50%;
        }
        @media (max-width: 768px) {
          .tp-about__sub-img {
            width: 70%;
          }
        }
      `}</style>
    </>
  );
};

export default AboutArea;