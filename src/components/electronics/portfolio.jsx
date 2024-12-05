import portfolio_data from '@/src/data/electronics-data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// Data
const categories = [
  "All",
  ...new Set(portfolio_data.map((item) => item.category)),
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter(
        (findItem) => findItem.category === cateItem
      );
      setItems(findItems);
    }
  };

  return (
    <>
      <div className="portfolio-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="portfolio-filter masonary-menu text-center mb-35"
                style={{
                  fontSize: "60px",
                  lineHeight: "90px",
                  fontWeight: "500",
                  letterSpacing: "1.5px",
                  color: "#1F1D1D",
                }}
              >
                Our Software Products
              </div>
              <div
                className="portfolio-description text-center mb-35"
                style={{
                  width: "100%",
                  fontSize: "20px",
                  letterSpacing: "1.3",
                  fontWeight: "400",
                  color: "#1F1D1D",
                }}
              >
                We have an experienced team of production and inspection personnel to ensure quality.
              </div>
            </div>
          </div>
                  <div className="row grid">
          {items.map((item, i) => (
            <div
              key={i}
              className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item"
            >
              <Link href="/project-details">
                {/* <a className="block-link"> */}
                  <div className="inner-project-item mb-30">
                    <div className="inner-project-img fix p-relative">
                      <Image
                        className="w-100"
                        src={item.thumb_img}
                        alt="theme-pure"
                      />
                      <div className="inner-project-brand">
                        <Image src={item.brand_logo} alt="theme-pure" />
                      </div>
                    </div>
                    <div className="inner-project-content">
                      <span className="inner-project-category-title">
                        {item.job_title}
                      </span>
                      <h4 className="inner-project-title">{item.title}</h4>
                      <p>{item.des}</p>
                    </div>
                  </div>
                {/* </a> */}
              </Link>
            </div>
          ))}
        </div>

          {/* View More Link */}
          <div className="view-more-link" style={{ textDecoration: 'underline', color: "#1F1D1D" }}>
            <Link href="/portfolio">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                View More
                <Image
                  src="/assets/img/project/rightarrow.png"
                  alt="View More Icon"
                  width={20.23}
                  height={20.23}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .block-link {
          text-decoration: none;
          color: inherit;
          display: block;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .block-link:hover {
          transform: scale(1.03);
        }
        .view-more-link {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }
        @media (max-width: 768px) {
          .view-more-link {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Portfolio;
