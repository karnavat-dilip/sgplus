import React, { useEffect } from 'react'
import { FaFacebook, FaInstagramSquare, FaYoutube, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import glogo from '../../Assets/SG+logo.jpg'
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <footer className='Footer'>
                <div className='container'>
                    <div className='Footer-child' data-aos="fade-down">
                        <div className='section-child' >
                            <div>
                                <img src={glogo} width='150' />
                                <p>The Secure Brand in Advanced Surveillance & Security Solutions. It started in year 2018 with vision and commitment to make Security and Surveillance Solutions with an ease of use with Simplicity and Affordability.</p>
                                <div className='customer-service'>
                                    <RiCustomerService2Line style={{
                                        width: '45px',
                                        height: '59px'
                                    }} />
                                    <ul>
                                        <li>Customer Support</li>
                                        <li>
                                            <a href="tel:+91 9737575852">+91 97375 75852
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+91 9512626626">+91 95126 26626</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <div>
                                <p>Our comprehensive range of Solutions and Products are Monitoring & Securing millions locations across the INDIA, from Highly sensitive defense locations, Government Buildings, Vital Infrastructures to Transportation, Hotels, Hospitals, educational institutes to Homes, with highly satisfied customer base. Today, SG PLUS is also a technology shifter from TVL to HD revolution.

                                </p>
                                <div className='social-icon-child' style={{
                                    height: 'fitContent',
                                    display: 'contents'
                                }}>
                                    <ul>
                                        <li>

                                            <a href='https://www.facebook.com/sgplus.cctv/'>
                                                <FaFacebook />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.instagram.com/sgpluscctv/'>
                                                <FaInstagramSquare />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.youtube.com/sgpluscctv'>
                                                <FaYoutube />

                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.linkedin.com/in/sgpluscctv/'>
                                                <FaLinkedin />

                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <h3>Sitemap</h3>
                            <ul className='sitemap'>
                                <li>
                                    <a href='/Allproduct'>Our Product</a>
                                </li>
                                <li>
                                    <a href='/about'>About Us</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Mission</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Vision</a>
                                </li>
                                <li>
                                    <a href='/contact'>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className='section-child'>
                            <a href='/contact'>Contact Us</a>
                            <ul className='contactus'>
                                <li>
                                    <b>SGplus Smart Technology</b>
                                </li>
                                <li>
                                saibaba temple road, near gandhi linkan hospital, Neminath Nagar, Deesa, Gujarat 385535
                                </li>
                                <li>
                                    Gujarat(INDIA)385001
                                </li>
                                <li className='contact-link'>
                                    <IoIosCall className='contact-support' /><a href='tel:+91 9512626626'>+919512626626</a>&nbsp;
                                    <a href='tel:+91 9737575852'>9737575852</a>&nbsp;
                                </li>
                                <li className='contact-link'>
                                    <IoMdMail className='contact-support' />
                                    Email Us:
                                </li>
                                <li>
                                    <a style={{
                                        left: '24px',
                                        position: 'relative'
                                    }} href='mailto:info@sgplus.in'>info@sgplus.in</a>
                                </li>

                                <li className='contact-link'>
                                    <TbWorldWww className='contact-support' />
                                    <a href='https://www.sgplus.in'>www.sgplus.in</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='copyright'>
                        <p>Copyright © 2024 SGplus Smart Technology | All Rights Reserved Designed & Developed By <a href='tel:+91 9913448958' style={{color:'black'}}>Karnavat dilip</a></p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer
