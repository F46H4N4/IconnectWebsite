import Image from "next/image";
import Link from "next/link";
import React from "react";
import author_img_1 from "../../../public/assets/img/contact/kuwait.png";
import bottomLeftImg from "../../../public/assets/img/contact/manwithlap.png";

const blog_grid_content = {
  grid_slider_data: [
    {
      id: 1,
      bg_img: "/assets/img/contact/location.png",
    //   title: "5 Companies doing Brand Marketing Right",
    //   des: "From publishing content and hoping to acquire leads to gaining audience insights and making personalized content marketing.",
      author_img: author_img_1,
      author_name: "Our Location",
      author_info: "Al Mubarakiya, Oman Street, Behind Gulf Bank Head Office, Kuwait City 15258",
    }
  ]
};

const BlogGrid = () => {
  const { grid_slider_data } = blog_grid_content;
  const firstItem = grid_slider_data[0];

  return (
    <>
      <div className="blog-grid-area pt-100 pb-100">
        <div className="container">
          <div className="blog-details">
            <div
              className="blog-content"
              style={{
                backgroundImage: `url(${firstItem.bg_img})`,
                backgroundSize: "cover",
                height: "500px",
                position: "relative",
                padding: "20px",
              }}
            >
              {/* <div className="blog-title">
                <h4><Link href="/blog-details">{firstItem.title}</Link></h4>
                <p>{firstItem.des}</p>
              </div> */}

              {/* Author Info */}
              <div className="blog-author-info">
                <div className="author-img">
                  <Image src={firstItem.author_img} alt="Location" width={50} height={50} />
                </div>
                <div className="author-details">
                  <h5>{firstItem.author_name}</h5>
                  <span>{firstItem.author_info}</span>
                </div>
              </div>

              {/* Man with Laptop placed on bottom right */}
              <div className="bottom-right-img">
                <Image src={bottomLeftImg} alt="Man with Laptop" width={150} height={150} />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .blog-details {
          position: relative;
        }
        .blog-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .blog-title {
          background: rgba(255, 255, 255, 0.7);
          padding: 15px;
          border-radius: 8px;
        }
        .blog-author-info {
          display: flex;
          align-items: center;
          bottom:20px;
          padding: 10px;
        }
        .author-img {
          margin-right: 10px;
        }
        .bottom-right-img {
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 150px;
          height: auto;
        }
      `}</style>
    </>
  );
};

export default BlogGrid;
