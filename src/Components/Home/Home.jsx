import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from '../../Assets/banner01.jpg'
import Banner2 from '../../Assets/banner02.jpg'
import profile_img from '../../Assets/SG+Banner.jpg'
import SGBanner from '../../Assets/SG+img1.jpg'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import { Accordion, styled } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo1 from '../../Assets/logo1.jpg'
import testy1 from '../../Assets/testi1.jpg'
import testy2 from '../../Assets/testi2.jpg'
import testy3 from '../../Assets/testi3.jpg'
import logo3 from '../../Assets/logo3.jpg'
import logo4 from '../../Assets/logo4.jpg'
import logo5 from '../../Assets/logo5.jpg'
import logo7 from '../../Assets/logo7.jpg'
import logo8 from '../../Assets/logo8.jpg'
import logo9 from '../../Assets/logo9.jpg'
import logo10 from '../../Assets/logo10.jpg'
import logo11 from '../../Assets/logo11.jpg'
import logo12 from '../../Assets/logo12.jpg'
import logo13 from '../../Assets/logo13.jpg'
import p1 from '../../Assets/p1.webp'
import p2 from '../../Assets/p1.webp'
import p3 from '../../Assets/p1.webp'
import p4 from '../../Assets/p1.webp'
import p5 from '../../Assets/p1.webp'
import p6 from '../../Assets/p1.webp'

function AboutUs() {
  return (
    <div>
      <p>The Secure Brand in Advanced Surveillance & Security Solutions. It started in year 2018 with vision and commitment to make Security and Surveillance Solutions with an ease of use with Simplicity and Affordability...
        <a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}

function OurStrength() {
  return (
    <div>
      <p>Their ability to deter crime, collect evidence, and provide real-time monitoring makes them an essential tool for many organizations and individuals...


        <a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}

function OurService() {
  return (
    <div>
      <p>Our comprehensive range of Solutions and Products are Monitoring & Securing millions locations across the INDIA, from Highly sensitive defense locations, Government Buildings, Vital Infrastructures to Transportation, Hotels, Hospitals, educational institutes to Homes, with highly satisfied customer base. Today, SG PLUS is also a technology shifter from TVL to HD revolution...
      <a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}


function Home() {
  const [counteron, setcounteron] = useState(false)
  const [content, setContent] = useState(AboutUs);
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
      title: 'SG-04 NVR BK-S3'
    },
    {
      id: uuidv4(),
      img: p2,
      title: 'SG-08 NVR BK-S3'
    },
    {
      id: uuidv4(),
      img: p3,
      title: 'SG-16 NVR BK-S3'
    },
    {
      id: uuidv4(),
      img: p4,
      title: 'SG Plus Cable'
    },
    {
      id: uuidv4(),
      img: p5,
      title: 'SG Plus SMPS'
    },
    {
      id: uuidv4(),
      img: p6,
      title: 'BNC & DC Connector'
    }
  ]

  

  return (
    <>
      <div className='swiper-container'>
        <section className='slide' data-aos="flip-left">
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide><img src={Banner1} id='img1' /></SwiperSlide>
              <SwiperSlide><img src={Banner2} id='img2' /></SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Welcome to SG Plus Smart Technology</h1>
            </div>
            <div className='intro'>
              <div className='d-flex'>
                <div>
                  <h4>Introduction</h4>
                  <p>The Secure Brand in Advanced Surveillance & Security Solutions. It started in year 2018 with vision and commitment to make Security and Surveillance Solutions with an ease of use with Simplicity and Affordability.</p>
                  <h4>Production & Manufacturing Capacity
                  </h4>
                  <p>Our comprehensive range of Solutions and Products are Monitoring & Securing millions locations across the INDIA, from Highly sensitive defense locations, Government Buildings, Vital Infrastructures to Transportation, Hotels, Hospitals, educational institutes to Homes, with highly satisfied customer base. Today, SG PLUS is also a technology shifter from TVL to HD revolution.
                  </p>
                  <div>
                <h4>Technology Innovations
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe recusandae doloremque laborum, aperiam alias numquam labore eligendi hic possimus placeat.</p>
              </div>
                </div>
                <div>
                  <img src={SGBanner} id='profile-img' />
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'><h1>Product Category</h1></div>
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
                        {/* <div key={product.id} className='swiper-child'> */}
                        <a href={`/Allproduct/${index + 1}`}>
                          <img src={product.img} width='100px' height='100px' />
                          <h3>{product.title}</h3>
                        </a>
                        {/* </div> */}
                      </SwiperSlide>

                    )
                  })
                }
              </Swiper>
            </div>

          </div>
        </section >
        <section data-aos="fade-up" style={{ padding: '2%' }}>
          <div className='container'>
            <div className='count-container'>
              <div className='totalno'>

                {<CountUp start={0} end={112200} duration={2} delay={0} />}+

                <h4>Happay Clients</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={22200} duration={5} delay={0} />}+

                <h4>Total Projects</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={170} duration={5} delay={0} />}+

                <h4>Total Product</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={12} duration={5} delay={0} />}+

                <h4>Total Achivements</h4>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='nav-container'>
              <div className='b-btm'>
                <h1>Who we are?</h1>
              </div>
              <div>
                <nav>
                  <ul>
                    <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(AboutUs, 'about')}>About Us</li>
                    <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                    <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='text-indent'>

              {content && content}

            </div>
            <div>
              <img src={profile_img} style={{ width: '100%',paddingTop: '14px' }} />
            </div>
          </div>
        </section>
        
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'><h1>Our Client</h1></div>
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
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo1} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo3} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo4} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo5} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo7} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo8} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo9} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo10} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo11} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo12} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo13} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={testy1} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={testy2} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={testy3} width='100' height='100' />
                </SwiperSlide>
              </Swiper>
            </div>

          </div>
        </section >
        <section>

        </section>
      </div >
    </>
  )
}

export default Home
