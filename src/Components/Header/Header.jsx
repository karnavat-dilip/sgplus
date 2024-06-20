import React, { useEffect, useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import './Header.css'

import glogo from '../../Assets/SG+logo.jpg'
import Iso_90012015 from '../../Assets/Iso-9001-2015.png'
import { MdDownload } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";
import { stack as Menu } from 'react-burger-menu'
import { Accordion, styled } from '@mui/material';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaHome } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { MdEqualizer } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { PiArrowUpBold } from "react-icons/pi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import p1 from '../../Assets/p1.webp'
import p2 from '../../Assets/p1.webp'
import p3 from '../../Assets/p1.webp'
import p4 from '../../Assets/p1.webp'
import p5 from '../../Assets/p1.webp'
import p6 from '../../Assets/p1.webp'
import p7 from '../../Assets/p1.webp'
import p8 from '../../Assets/p1.webp'
import p9 from '../../Assets/p1.webp'
import p10 from '../../Assets/p1.webp'
import p11 from '../../Assets/p1.webp'
import p12 from '../../Assets/p1.webp'
import p13 from '../../Assets/p1.webp'
import p14 from '../../Assets/p1.webp'
import p15 from '../../Assets/p1.webp'
import p16 from '../../Assets/p1.webp'
import p17 from '../../Assets/p1.webp'
import p18 from '../../Assets/p1.webp'
import p19 from '../../Assets/p1.webp'
import p20 from '../../Assets/p1.webp'
import p21 from '../../Assets/p1.webp'
import p22 from '../../Assets/p1.webp'
import p23 from '../../Assets/p1.webp'
import p24 from '../../Assets/p1.webp'
import p25 from '../../Assets/p1.webp'
import p26 from '../../Assets/p1.webp'
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Checkmark } from 'react-checkmark'
import TranslateComponent from '../TranslateComponent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const CustomAccordion = styled(Accordion)(({ theme }) => ({
    textTransform: 'uppercase',
    left: '-15px',
    boxShadow: 'none',
}));

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [opencheckcircle, setopencheckcircle] = useState(false);
    const [loading, setloading] = useState(false)
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        number:'',
        message:''
    });

    const Changevalue = (e) => {
        const { name, value } = e.target;

        setEmailData({
            ...emailData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try {
            const response = await axios.post('http://localhost:4000/send-email', emailData);
            console.log(response);
            
            console.log('Email sent successfully');
            setOpen(false);
            setopencheckcircle(true);
            setEmailData({
                name: '',
                email: '',
                number:'',
                message:''
            })
        } catch (error) {
            alert('Error sending email');
        }finally{
            setloading(false)
        }
    };



    useEffect(() => {
        AOS.init()
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Closecheckcircle = () => {
        setopencheckcircle(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Show the scroll button when the page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    };



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
    const currentLocation = window.location.href;

    useEffect(() => {

        const links = document.querySelectorAll('.nav-links > ul > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.offcanvas-menu > ul > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.mobile-sub-menu > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active1');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.dropdown-content a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active-sub-menu');
            }
        });

    }, [])


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

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
        },
        {
            id: uuidv4(),
            img: p7,
            title: 'SG-20D BK-S3'
        },
        {
            id: uuidv4(),
            img: p8,
            title: 'SG-20B BK-S3'
        },
        {
            id: uuidv4(),
            img: p9,
            title: 'SG-20D BK-S4'
        },
        {
            id: uuidv4(),
            img: p10,
            title: 'SG-20B BK-S4'
        },
        {
            id: uuidv4(),
            img: p11,
            title: 'SG-20B BK-IP3'
        },
        {
            id: uuidv4(),
            img: p12,
            title: 'SG-50B BK-IP3'
        },
        {
            id: uuidv4(),
            img: p13,
            title: 'SG-20D BK-IP3'
        },
        {
            id: uuidv4(),
            img: p14,
            title: 'SG-20B BK-IP3'
        },
        {
            id: uuidv4(),
            img: p15,
            title: 'SG-20D PTNZ-S4'
        },
        {
            id: uuidv4(),
            img: p16,
            title: 'SG-20B PTNZ-S4'
        },
        {
            id: uuidv4(),
            img: p17,
            title: 'SG-04DVR BK-S3'
        },
        {
            id: uuidv4(),
            img: p18,
            title: 'SG-08DVR BK-S3'
        },
        {
            id: uuidv4(),
            img: p19,
            title: 'SG-16DVR BK-S3'
        },
        {
            id: uuidv4(),
            img: p20,
            title: 'SG-04DVR BK-S5'
        },
        {
            id: uuidv4(),
            img: p21,
            title: 'SG-08DVR BK-S4'
        },
        {
            id: uuidv4(),
            img: p22,
            title: 'SG-16DVR BK-S4'
        }
    ]

    return (
        <>
            <header className='header-section'>
                <div className='header-tops'>
                    <div className='container'>
                        <div className='container-child'>
                            <div>
                                <ul className='header-user-menu'>
                                    <li>
                                        <IoIosCall /><a href='tel:+91 9512626626'>+91 9512626626</a>
                                        <a href='tel:+91 9737575852'>+91 9737575852</a>
                                    </li>
                                    <li>
                                        <IoMdMail />
                                        <a href='mailto:info@sgplus.in'>info@sgplus.in</a>
                                    </li>


                                </ul>
                            </div>
                            <TranslateComponent />
                        </div>
                    </div>

                </div>
                <div className='header-center'>
                    <div className='container'>
                        <div className='header-logo-menu'>
                            <img src={glogo} width='300px' height='150px' alt='logo not available' style={{alignSelf: 'center'}}></img>
                            <img src={Iso_90012015} width='200px' height='200px' alt='logo not available'></img>
                        </div>
                    </div>
                </div>
                <div className='header-bottom'>
                    <nav className={isSticky ? 'sticky' : 'navbar'}>
                        <div className='container'>

                            <div className={`nav-links ${isOpen ? 'open' : ''}`}>

                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li className="dropdown">
                                        <a href='/Allproduct'>product <TfiAngleDown />
                                        </a>
                                        <div className="stone">
                                            <div className='container'>
                                                <div className='p-list-container'>
                                                    {
                                                        products?.map((product, index) => {
                                                            return (
                                                                <div key={product.id}>
                                                                    <a href={`/Allproduct/${index + 1}`}>
                                                                        <img src={product.img} width='100' style={{ alignSelf: 'center' }} />
                                                                        <h3>{product.title}</h3>
                                                                    </a>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="dropdown">
                                        <a>gallery <TfiAngleDown />
                                        </a>
                                        <div className="dropdown-content">
                                            <a href="/photos">Photos</a>
                                            <a href="/videos">Videos</a>
                                        </div>
                                    </li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>


                                <ul className='download'>
                                    <li>
                                        <a onClick={handleClickOpen}>BROUCHER <MdDownload />
                                        </a>
                                    </li>
                                </ul>


                            </div>

                        </div>
                    </nav>
                </div>
            </header>
            <Dialog
                open={opencheckcircle}
                keepMounted
                onClose={Closecheckcircle}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>
                    <div>
                        <Checkmark size='xxLarge' color='#01a875'/>
                        <h1 style={{
                            textAlign: 'center',
                            padding: '14px'
                        }}>
                            Sent!
                        </h1>
                        <div>
                            <p>Kindly check your mail to view or download this document.</p>
                        </div>
                    </div>
                </DialogContent>

            </Dialog >
            <Dialog
                open={open}

                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <div style={{ padding: '0px 88px 0px 0px' }}>

                            <div className='sentmail'>
                                <input type='text' placeholder='Enter your Name' name='name' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <input type='tel' placeholder='Enter your mobile number' name='number' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <input type='email' placeholder='Enter your Email' name='email' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <textarea placeholder='Message...' name='message' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <div>
                                    <button type='submit'>Submit</button>
                                </div>
                                <div>
                                    {
                                        loading ?
                                            <Box sx={{ display: 'flex'}}>
                                                <CircularProgress style={{color:'#01a875'}}/>
                                            </Box> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </DialogContent>

            </Dialog>
            <div className="scroll-to-top" data-aos="fade-up">
                {isVisible && (
                    <button onClick={scrollToTop}>
                        <PiArrowUpBold />
                    </button>
                )}
            </div>
            <div className='Whatsapp'>
                <ul>
                    <li>
                        <a href='https://api.whatsapp.com/send/?phone=919512626626&text&type=phone_number&app_absent=0' target='_blank'><FaSquareWhatsapp style={{
                            width: '47px',
                            height: '48px',
                            color: '#25d366'
                        }} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mobile-header-section d-block d-lg-none">
                {/* Start Mobile Header Wrapper */}
                <div className="mobile-header-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <div className="mobile-header--left">
                                    <a href="/" className="mobile-logo-link">
                                        <img
                                            src={glogo}
                                            alt="logo not available"
                                            width='100'
                                            className="mobile-logo-img"
                                        />
                                    </a>
                                </div>
                                <Menu>
                                    <div className="offcanvas-mobile-menu-wrapper">
                                        {/* Start Mobile Menu User Top */}
                                        <div className="mobile-menu-top">
                                            <span>
                                                <b>Welcome to our SGPlus Smart Technology</b>
                                            </span>
                                            {/* Start Header Top Menu */}
                                            <ul className="mobile-menu-user-menu">
                                                <li className="header-user-menu-link">
                                                    <IoIosCall />
                                                    <a href="tel:+91 9737575852" target="_blank">
                                                        <b> +91 9737575852</b>
                                                    </a>
                                                    <a href="tel:+91 9512626626" target="_blank">
                                                        <b>+91 9512626626</b>
                                                    </a>
                                                </li>
                                                <a href="tel:+91 9512626626"></a>
                                                <li className="header-user-menu-link">
                                                    <IoMdMail />
                                                    <a href="mailto:gujaratpanel@gmail.com" target="_blank">
                                                        &nbsp;
                                                    </a>
                                                    <b> info@sgplus.in</b>
                                                </li>
                                                {/*                <li class="header-user-menu-link"><div id="google_translate_element" class="google_translate_element"></div></li>*/}
                                            </ul>
                                            {/* End Header Top Menu */}
                                        </div>{" "}
                                        {/* End Mobile Menu User Top */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center mt-5">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex justify-content-center mobile-homeTitle d-flex">
                                                        {/*                        <h2>Goodluck</h2>*/}
                                                        {/*                        <h2 style="color: #ea1c26">&nbsp;Pump</h2>*/}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex">
                                                        <img
                                                            className="mobile-isoImg"
                                                            src={Iso_90012015}
                                                            alt="Image not available"
                                                            width='100'
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu Bottom */}
                                        <div className="mobile-menu-bottom">
                                            {/* Start Mobile Menu Nav */}
                                            <div className="offcanvas-menu">
                                                <ul>
                                                    <li className="mobileli">

                                                        <a href="/"><FaHome className='fa-icon' />Home</a>
                                                    </li>

                                                    <li className="mobileli">

                                                        <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                            >
                                                                <div style={{
                                                                    height: '16px',
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <AiOutlineAppstore className='fa-icon' />
                                                                    <a href='/Allproduct'>
                                                                        Products
                                                                    </a>
                                                                </div>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <ul className="mobile-sub-menu">
                                                                    <li>
                                                                        <a href="/Allproduct/1">SG-04 NVR BK-S3</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/2">SG-08 NVR BK-S3</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/3">SG-16 NVR BK-S3</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/4">SG Plus Cable
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/5">SG Plus SMPS</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/6">BNC & DC Connector</a>
                                                                    </li>
                                                                </ul>
                                                            </AccordionDetails>
                                                        </CustomAccordion>
                                                    </li>

                                                    <li className="mobileli">

                                                        <a href="/about" className="menuBtn">
                                                            <FaCircleInfo className='fa-icon' />
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li className="mobileli">

                                                        <a
                                                            onClick={handleClickOpen}
                                                            className="downalodMenu"
                                                        >
                                                            <FaCloudDownloadAlt className='fa-icon' />
                                                            Broucher
                                                        </a>
                                                    </li>
                                                    <li className="mobileli">
                                                        <div>
                                                            <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}

                                                                >
                                                                    <GrGallery className='fa-icon' />
                                                                    Gallery
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <ul className="mobile-sub-menu">
                                                                        <li>
                                                                            <a href="/photos">Photos</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="/videos">Videos</a>
                                                                        </li>

                                                                    </ul>
                                                                </AccordionDetails>
                                                            </CustomAccordion>
                                                        </div>
                                                    </li>
                                                    <li className="mobileli">

                                                        <a href="/contact"><MdContactPhone className='fa-icon' />Contact Us</a>
                                                    </li>
                                                </ul>
                                            </div>{" "}
                                            {/* End Mobile Menu Nav */}
                                        </div>{" "}
                                        {/* End Mobile Menu Bottom */}
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div > {" "}
                {/* End Mobile Header Wrapper */}
            </div >
        </>
    )
}

export default Header
