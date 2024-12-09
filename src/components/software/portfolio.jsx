import blog_data from '@/src/data/software-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
    return (
        <>
            <div className="tp-blog-area pb-80" style={{ paddingTop: '84px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="tp-blog-section-box text-center mb-50">
                                <h3 className="tp-section-title-3">
                                    <span>Our Products</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blog_data.slice(0, 6).map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-60">
                            <Link href={`/${item.slug}-project-details`} passHref>
                            {/* <a style={{ textDecoration: 'none' }}> This ensures the whole block is clickable */}
                                        <div className="tp-blog-item" style={{ cursor: 'pointer' }}>
                                            {/* Blog Image */}
                                            <div className="tp-blog-thumb fix">
                                                <Image src={item.img} alt={item.title} />
                                            </div>

                                            {/* Blog Meta */}
                                            <div className="tp-blog-meta d-flex align-items-center">
                                                <div className={`tp-blog-category category-color-${item.color}`}>
                                                    <span>{item.category}</span>
                                                </div>
                                                <div className="tp-blog-date">
                                                    <span>{item.date}</span>
                                                </div>
                                            </div>

                                            {/* Blog Title */}
                                            <div className="tp-blog-title-box">
                                                <h4 className="tp-blog-title-sm">{item.title}</h4>
                                            </div>

                                            {/* Learn More Link */}
                                            <div className="tp-blog-author-info-box d-flex align-items-center">
                                                <span className="learn-more-link" style={{ fontSize: '17.5px', color: "#393939", lineHeight: '25.47px', letterSpacing: '1px',fontWeight:'400' }}>
                                                    {item.desc}
                                                </span>
                                            </div>
                                        </div>
                                    {/* </a> */}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .learn-more-link {
                    color: blue;
                    font-weight: bold;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .learn-more-link i {
                    font-size: 14px;
                    transition: transform 0.3s ease;
                }
                .learn-more-link:hover {
                    text-decoration: underline;
                }
                .learn-more-link:hover i {
                    transform: translateX(3px); /* Arrow moves slightly on hover */
                }
            `}</style>
        </>
    );
};

export default BlogArea;
