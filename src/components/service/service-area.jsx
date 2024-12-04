import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';
import service_data from '@/src/data/service-data';

// Service content
const service_content = {
  bg_img: "/assets/img/service/service_main_bg.png",
  service_title: "Services",
  service_info: <>What We Do</>,
};
const { title, bg_img, service_title, service_info } = service_content;

const ServiceArea = () => {
  const router = useRouter();

  const navigateToDetails = () => {
    router.push('/service-details');
  };

  return (
    <>
      <div className="tp-service-area z-index">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                <h3 className="tp-section-title tp-title-anim">{title}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Featured service */}
            <div className="col-xl-8 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div
                className="tp-service-3-item mb-30 p-relative z-index"
                onClick={navigateToDetails} // Navigate when the block is clicked
                style={{
                  backgroundImage: `url(${bg_img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '361px',
                  cursor: 'pointer', // Indicate the block is clickable
                }}
              >
                <div
                  className="tp-service-3-content"
                  onClick={(e) => e.stopPropagation()} // Prevent click on background image from navigating
                >
                  <span>{service_title}</span>
                  <h4 className="tp-service-3-title-sm">{service_info}</h4>
                </div>
                <div className="tp-service-3-btn">
                  <button className="tp-btn-white-solid" onClick={navigateToDetails}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Mapped services */}
            {service_data.slice(17, 24).map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div
                  className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between"
                  onClick={navigateToDetails}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="tp-service-sm-icon">
                    {item.icon && (
                      <Image src={item.icon} alt={item.title} width={50} height={50} />
                    )}
                  </div>
                  <div className="tp-service-sm-content">
                    <span>{item.title}</span>
                    <h3 className="tp-service-sm-title">{item.description}</h3>
                    <div className="tp-service-sm-link">
                      Learn More <i className="far fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tp-service-3-item,
        .tp-service-sm-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tp-service-3-item:hover,
        .tp-service-sm-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .tp-service-section-wrapper {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default ServiceArea;
