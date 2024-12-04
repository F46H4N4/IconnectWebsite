import blog_data from '@/src/data/blog-data';
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
                        {blog_data.slice(0, 3).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-lg-4 col-md-6 mb-60"
                                onClick={() => (window.location.href = `/${item.slug}-details`)} // Navigate dynamically
                                style={{ cursor: 'pointer' }} // Indicate the block is clickable
                            >
                                <div className="tp-blog-item">
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
                                        <Link href={`/${item.slug}-details`} className="learn-more-link" style={{ color:"#130DE5" }}>
                                            Learn More <i className="fas fa-arrow-right" style={{ color:"#130DE5", paddingLeft:'2px' }}></i>
                                        </Link>
                                    </div>
                                </div>
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
