import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import p1 from '../../Assets/p1.webp'
import p2 from '../../Assets/p1.webp'
import p3 from '../../Assets/p1.webp'
import p4 from '../../Assets/p1.webp'
import p5 from '../../Assets/p1.webp'
import p6 from '../../Assets/p1.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import { IoBarChartSharp } from "react-icons/io5";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import { IoFlaskSharp } from "react-icons/io5";
import Value from '../../Assets/values.jpg'
import OurMission from '../../Assets/mission.jpg'
import OurVision from '../../Assets/vision.jpg'
import about from '../../Assets/SG+profile.jpg'
import TaTa from '../../Assets/testi1.jpg'
import reliance from '../../Assets/testi2.jpg'
import wasmo from '../../Assets/testi3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './About.css'
function About() {
    return (
        <div>
            <p>The Secure Brand in Advanced Surveillance & Security Solutions. It started in year 2018 with vision and commitment to make Security and Surveillance Solutions with an ease of use with Simplicity and Affordability...</p>
        </div>
    );
}

function OurStrength() {
    return (
        <div>
            <p>Their ability to deter crime, collect evidence, and provide real-time monitoring makes them an essential tool for many organizations and individuals...</p>
        </div>
    );
}

function OurService() {
    return (
        <div>
            <p>Our comprehensive range of Solutions and Products are Monitoring & Securing millions locations across the INDIA, from Highly sensitive defense locations, Government Buildings, Vital Infrastructures to Transportation, Hotels, Hospitals, educational institutes to Homes, with highly satisfied customer base. Today, SG PLUS is also a technology shifter from TVL to HD revolution...</p>
        </div>
    );
}
function AboutUs() {
    const [content, setContent] = useState(About);
    const [activeLink, setActiveLink] = useState('about');

    const handleNavigation = (contentComponent, linkName) => {
        setContent(contentComponent);
        setActiveLink(linkName)
    };
    useEffect(() => {
        AOS.init()
    }, [])
    const products = [
        {
            id: uuidv4(),
            img: p1,
        },
        {
            id: uuidv4(),
            img: p2,
        },
        {
            id: uuidv4(),
            img: p3,
        },
        {
            id: uuidv4(),
            img: p4,
        },
        {
            id: uuidv4(),
            img: p5,
        },
        {
            id: uuidv4(),
            img: p6,
        }
    ]
    return (
        <div>
            <Breadcrumbs title='About Us' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='about-container'>
                        <div data-aos="fade-up">
                            <img src={about} />
                        </div>
                        <div className='second-child' data-aos="fade-up">
                            <h1>Welcome To SGPlus Smart Technology</h1>
                            <p>The Secure Brand in Advanced Surveillance & Security Solutions. It started in year 2018 with vision and commitment to make Security and Surveillance Solutions with an ease of use with Simplicity and Affordability.Our comprehensive range of Solutions and Products are Monitoring & Securing millions locations across the INDIA, from Highly sensitive defense locations, Government Buildings, Vital Infrastructures to Transportation, Hotels, Hospitals, educational institutes to Homes, with highly satisfied customer base. Today, SG PLUS is also a technology shifter from TVL to HD revolution.</p>
                        </div>
                        <div data-aos="fade-up">
                            <h1>Our Certificates</h1>
                            <div className='product-container'>
                                <Swiper

                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 5,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={true}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}

                                >
                                    {
                                        products?.map((product, index) => {
                                            return (
                                                <SwiperSlide key={product.id} className='swiper-child'>
                                                    <div>
                                                        <img src={product.img} width='100px' height='100px' />
                                                    </div>
                                                </SwiperSlide>

                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                        <div className='second-child' data-aos="fade-up">
                            <h1>Why SGPlus Smart Technology?</h1>
                            <div>
                                <div className='bd-highlight'>
                                    <IoBarChartSharp />

                                    <h2>Performance</h2>
                                    <p>
                                        Higher resolution cameras provide clearer images, which are crucial for identifying details such as faces and license plates. Common resolutions include 720p, 1080p, 4K, etc.

                                    </p>
                                </div>
                                <div className='bd-highlight'>
                                    <PiCheckSquareOffsetFill />


                                    <h2>High Quality
                                    </h2>
                                    <p>
                                        Use cameras with high-quality image sensors (e.g., CMOS or CCD) that offer better sensitivity, dynamic range, and low-light performance.
                                    </p>
                                </div>
                                <div className='bd-highlight'>
                                    <IoFlaskSharp />

                                    <h2>Testing</h2>
                                    <p>
                                        Thorough testing of a CCTV system, both before and after installation, ensures that it performs reliably and meets the security requirements of the environment it monitors.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className='nav-container'>
                                <div className='b-btm'>
                                    <h1>Who we are?</h1>
                                </div>
                                <div>
                                    <nav>
                                        <ul>
                                            <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(About, 'about')}>About Us</li>
                                            <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                                            <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className='text-indent'>

                                {content && content}

                            </div>
                        </div>
                        <div className='ourmission' data-aos="fade-up">
                            <div>
                                <img src={Value} width='100' />

                                <h2>Value</h2>
                                <p>
                                    We have earned clients’ trust with reliable service and quality products. We accept the consequences of our actions as a sign of responsibility. Our professionalism can be viewed through flawless service and high-end products.
                                </p>
                            </div>
                            <div>
                                <img src={OurMission} width='100' />


                                <h2>Our Mission
                                </h2>
                                <p>
                                    • The importance is treating it personnel
                                    • Human Resource enhancement
                                    • Innovation
                                    • Environmental Protection
                                </p>
                            </div>
                            <div>
                                <img src={OurVision} width='100' />

                                <h2>Our Vision</h2>
                                <p>
                                    Our vision is to fulfil the requirements of our clients in every way you need. We are leaders in giving satisfaction and service in the provisions of quality cost effective security systems.
                                </p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
