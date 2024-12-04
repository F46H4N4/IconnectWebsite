import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import SocialLinks from '@/src/common/social-links';
import ContactIcon from '@/src/svg/contact-icon';
import EmailIcon from '@/src/svg/email';
import LocationIcon from '@/src/svg/location-icon';
import PhoneIcon from '@/src/svg/phone-icon';
import RightArrow from '@/src/svg/right-arrow';

import footer_logo from '../../../public/assets/img/logo/iConnect-Logo.png';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicEffect';

// Footer content data
const footer_content = {
  title: <>Get Our Latest's News <br /> & Updates</>,
  phone: '+965 22401313',
  contact_mail: 'info@iconnect-kw.com',
  locations: [
    {
      country: 'KUWAIT',
      address: 'Al Mubarakiya, Oman Street, Behind Gulf Bank Head Office, Kuwait City 15258.',
    },
  ],
  copy_right: <>Full Copyright & Design By <Link href="#">@Theme pure</Link> – {new Date().getFullYear()}</>,
  footer_links: [
    {
      id: 1,
      cls_1: 'col-xl-3 col-lg-3 col-md-5',
      cls_2: 'footer-col-2',
      title: 'What We Do',
      delay: '.7s',
      links: [
        { name: 'Web Development', link: '/web-development-service-details' },
        { name: 'Web Hosting', link: '/web-hosting-service-details' },
        { name: 'Outsourcing Service', link: '/outsource-service-details' },
        { name: 'App Development', link: '/app_development-service-details' },
        { name: 'Business Solution', link: '/business-service-details' },
        { name: 'E-commerce', link: '/e-commerce-service-details' },
      ],
    },
    {
      id: 2,
      cls_1: 'col-xl-2 col-lg-2 col-md-6',
      cls_2: 'footer-col-3',
      title: 'Pages',
      delay: '.9s',
      links: [
        { name: 'Home', link: '/home' },
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/service' },
        { name: 'Career', link: '/career' },
        { name: 'Contact', link: '/contact' },
      ],
    },
  ],
};
const { title, phone, contact_mail, locations, copy_right, footer_links } = footer_content;

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLangMenu = () => {
    setIsOpen(!isOpen);
  };

  useIsomorphicLayoutEffect(() => {
    gsap.set('.tp-gsap-bg', { scaleX: 1 });
    let mm = gsap.matchMedia();
    mm.add('(min-width:1400px)', () => {
      gsap.to('.tp-gsap-bg', {
        scrollTrigger: {
          trigger: '.tp-gsap-bg',
          scrub: 0.02,
          start: 'top bottom',
          end: 'bottom bottom',
        },
        scaleX: 0.95,
        borderRadius: '30px',
        transformOrigin: 'center center',
        ease: 'none',
      });
    });
  }, []);

  return (
    <footer className="pt-50 fix">
      <div className="tp-footer__pl-pr p-relative">
        <div className="footer-black-bg tp-gsap-bg"></div>
        <div className="tp-footer__area pt-50">
          <div className="container">
            <div className="tp-footer__border-bottom">
              <div className="row align-items-center">
                <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <div className="tp-footer__top-text">
                    <span>{title}</span>
                  </div>
                </div>
                <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                  <div className="tp-footer__input p-relative">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Business email address" />
                      <span>
                        <EmailIcon />
                      </span>
                      <button>
                        <RightArrow />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="tp-footer__top-space">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-7 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                  <div className="tp-footer__widget footer-col-1">
                    <Link href="/" className="tp-footer__widget-logo mb-10">
                      <Image src={footer_logo} alt="Footer Logo" width={152} height={60.8} style={{ objectFit: 'contain' }} />
                    </Link>
                    <div className="tp-footer__text" style={{ color: '#fff' }}>
                      <div className="d-flex align-items-center mb-2">
                        <span className="me-2">
                          <PhoneIcon style={{ stroke: '#fff', strokeWidth: '2' }} />
                        </span>
                        <Link href={`tel:${phone}`} style={{ color: '#fff' }}>
                          {phone}
                        </Link>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2">
                          <ContactIcon style={{ stroke: '#fff', strokeWidth: '2' }} />
                        </span>
                        <Link href={`mailto:${contact_mail}`} style={{ color: '#fff' }}>
                          {contact_mail}
                        </Link>
                      </div>
                    </div>
                    <div className="tp-footer__social mt-3">
                      <SocialLinks />
                    </div>
                  </div>
                </div>

                {footer_links.map((item) => (
                  <div key={item.id} className={`${item.cls_1} pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay={item.delay}>
                    <div className={`tp-footer__widget ${item.cls_2}`}>
                      <h4 className="tp-footer__widget-title">{item.title}</h4>
                      <div className="tp-footer__content">
                        <ul>
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <Link href={link.link}>{link.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                  <div className="tp-footer__widget footer-col-4">
                    <h4 className="tp-footer__widget-title">Office Address</h4>
                    <div className="tp-footer__contact-info tp-footer__icon-space">
                      <ul>
                        {locations.map((loc, index) => (
                          <li key={index} className="location-item">
                            <div className="d-flex align-items-start">
                              <span className="icon-container me-3">
                                <LocationIcon />
                              </span>
                              <p className="mb-0" style={{ color: 'white' }}>
                                <strong>{loc.country}</strong>
                                <br />
                                {loc.address}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-copyright__area pt-20 pb-20">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                <span>{copy_right}</span>
              </div>
              <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                <div className="tp-copyright__lang-box d-flex align-items-center justify-content-md-end justify-content-start">
                  <ul>
                    <li>
                      <button id="tp-copyright__lang-toggle" onClick={toggleLangMenu}>
                        <span>
                          English (US)
                          <i className="fal fa-angle-down"></i>
                        </span>
                      </button>
                      {isOpen && (
                        <ul className="tp-copyright__lang-submenu open">
                          <li>
                            <Link href="#">Arabic</Link>
                          </li>
                          <li>
                            <Link href="#">Spanish</Link>
                          </li>
                          <li>
                            <Link href="#">Mandarin</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
