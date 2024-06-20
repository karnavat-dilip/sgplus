import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Breadcrumbs from '../Breadcrumbs'
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
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
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './ProductById.css'
function ProductById() {
    const { id } = useParams();
    const productId = parseInt(id);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        AOS.init()
    }, [])

    const productsData = {
        "panels": [
            {
                "id": 6,
                "type": "SG Plus SMPS",
                "img": p5,
                "description": "The SG-04 NVR BK-S3 is suitable for small to medium-sized businesses, residential security setups, and any other applications requiring reliable video surveillance management. Its flexibility and range of features make it an adaptable solution for various security needs.",
                "features": [
                    "1080 HD Resolution 1 Sata",
                    "4CH NVR Full HD H.265"
                ],
                "specifications": [
                    "Supports up to 4 IP cameras",
                    "Up to 4K UHD for HDMI",
                    "1080p for VGA"
                ],
                "other_info": [
                    "H.265 / H.264 for efficient storage and bandwidth usage",
                    "Compatible with iOS and Android for remote viewing and management"
                ]
            },
            {
                "id": 5,
                "type": "SG Plus Cable",
                "img": p4,
                "description": "The SG-04 NVR BK-S3 is suitable for small to medium-sized businesses, residential security setups, and any other applications requiring reliable video surveillance management. Its flexibility and range of features make it an adaptable solution for various security needs.",
                "features": [
                    "1080 HD Resolution 1 Sata",
                    "4CH NVR Full HD H.265"
                ],
                "specifications": [
                    "Supports up to 4 IP cameras",
                    "Up to 4K UHD for HDMI",
                    "1080p for VGA"
                ],
                "other_info": [
                    "H.265 / H.264 for efficient storage and bandwidth usage",
                    "Compatible with iOS and Android for remote viewing and management"
                ]
            },
            {
                "id": 4,
                "type": "SG-16 NVR BK-S3",
                "img": p3,
                "description": "The SG-04 NVR BK-S3 is suitable for small to medium-sized businesses, residential security setups, and any other applications requiring reliable video surveillance management. Its flexibility and range of features make it an adaptable solution for various security needs.",
                "features": [
                    "1080 HD Resolution 1 Sata",
                    "4CH NVR Full HD H.265"
                ],
                "specifications": [
                    "Supports up to 4 IP cameras",
                    "Up to 4K UHD for HDMI",
                    "1080p for VGA"
                ],
                "other_info": [
                    "H.265 / H.264 for efficient storage and bandwidth usage",
                    "Compatible with iOS and Android for remote viewing and management"
                ]
            },
            {
                "id": 3,
                "type": "SG-16 NVR BK-S3",
                "img": p3,
                "description": "The SG-04 NVR BK-S3 is suitable for small to medium-sized businesses, residential security setups, and any other applications requiring reliable video surveillance management. Its flexibility and range of features make it an adaptable solution for various security needs.",
                "features": [
                    "1080 HD Resolution 1 Sata",
                    "4CH NVR Full HD H.265"
                ],
                "specifications": [
                    "Supports up to 4 IP cameras",
                    "Up to 4K UHD for HDMI",
                    "1080p for VGA"
                ],
                "other_info": [
                    "H.265 / H.264 for efficient storage and bandwidth usage",
                    "Compatible with iOS and Android for remote viewing and management"
                ]
            },
            {
                "id": 2,
                "type": "SG-08 NVR BK-S3",
                "img": p2,
                "description": "The SG-04 NVR BK-S3 is suitable for small to medium-sized businesses, residential security setups, and any other applications requiring reliable video surveillance management. Its flexibility and range of features make it an adaptable solution for various security needs.",
                "features": [
                    "1080 HD Resolution 1 Sata",
                    "4CH NVR Full HD H.265"
                ],
                "specifications": [
                    "Supports up to 4 IP cameras",
                    "Up to 4K UHD for HDMI",
                    "1080p for VGA"
                ],
                "other_info": [
                    "H.265 / H.264 for efficient storage and bandwidth usage",
                    "Compatible with iOS and Android for remote viewing and management"
                ]
            },
            {
                "id": 1,
                "type": "SG-04 NVR BK-S3",
                "img": p1,
                "description": "The SG-04 NVR BK-S3 is suitable for small to medium-sized businesses, residential security setups, and any other applications requiring reliable video surveillance management. Its flexibility and range of features make it an adaptable solution for various security needs.",
                "features": [
                    "1080 HD Resolution 1 Sata",
                    "4CH NVR Full HD H.265"
                ],
                "specifications": [
                    "Supports up to 4 IP cameras",
                    "Up to 4K UHD for HDMI",
                    "1080p for VGA"
                ],
                "other_info": [
                    "H.265 / H.264 for efficient storage and bandwidth usage",
                    "Compatible with iOS and Android for remote viewing and management"
                ]
            }
        ]
    }
    const products = [
        {
            id: uuidv4(),
            img: p1,
            title: 'SG-04 NVR BK-S3',
            description: 'The SG-04 NVR BK-S3 is suitable for small to medium-sized businesses, residential security setups, and any other applications requiring reliable video surveillance management. Its flexibility and range of features make it an adaptable solution for various security needs.'
        },
        {
            id: uuidv4(),
            img: p2,
            title: 'SG-08 NVR BK-S3',
            description: 'The SG-08 NVR BK-S3 is tailored for environments requiring robust and scalable surveillance solutions. Its advanced features, extensive storage capacity, and high-definition video support make it ideal for businesses, larger residential properties, and other applications needing reliable and comprehensive video surveillance.'
        },
        {
            id: uuidv4(),
            img: p3,
            title: 'SG-16 NVR BK-S3',
            description: 'The SG-16 NVR BK-S3 is ideal for environments that demand a robust, scalable, and reliable surveillance solution. Its advanced features, substantial storage capacity, and support for high-definition video make it well-suited for large-scale security needs, ensuring comprehensive coverage and efficient management of extensive surveillance systems.'
        },
        {
            id: uuidv4(),
            img: p4,
            title: 'SG Plus Cable',
            description: 'The SG Plus Cable is designed to provide dependable and high-performance networking capabilities, making it an excellent choice for both professional and home networking setups. Its robust construction, compatibility with a range of devices, and support for high-speed data transmission ensure that it meets the demands of modern network environments.'
        },
        {
            id: uuidv4(),
            img: p5,
            title: 'SG Plus SMPS',
            description: 'The SG Plus SMPS (Switched-Mode Power Supply) is a high-efficiency power supply unit designed to provide reliable and stable power to a variety of electronic devices and systems.'
        },
        {
            id: uuidv4(),
            img: p6,
            title: 'BNC & DC Connector',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p7,
            title: 'SG-20D BK-S3',
            description: '---'
        },
        {
            id: uuidv4(),
            img: p8,
            title: 'SG-20B BK-S3',
            description: '---'
        },
        {
            id: uuidv4(),
            img: p9,
            title: 'SG-20D BK-S4',
            description: '---'
        },
        {
            id: uuidv4(),
            img: p10,
            title: 'SG-20B BK-S4',
            description: '---'
        },
        {
            id: uuidv4(),
            img: p11,
            title: 'SG-20B BK-IP3',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p12,
            title: 'SG-50B BK-IP3',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p13,
            title: 'SG-20D BK-IP3',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p14,
            title: 'SG-20B BK-IP3',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p15,
            title: 'SG-20D PTNZ-S4',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p16,
            title: 'SG-20B PTNZ-S4',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p17,
            title: 'SG-04DVR BK-S3',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p18,
            title: 'SG-08DVR BK-S3',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p19,
            title: 'SG-16DVR BK-S3',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p20,
            title: 'SG-04DVR BK-S5',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p21,
            title: 'SG-08DVR BK-S4',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        },
        {
            id: uuidv4(),
            img: p22,
            title: 'SG-16DVR BK-S4',
            description: 'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
        }
    ]

    useEffect(() => {

        const foundProduct = productsData.panels.find(item => item.id === productId);
        setProduct(foundProduct);
    }, [productId]);


    const { type, img, description, features, specifications, other_info } = product || {};

    return (
        <>
            <Breadcrumbs title='Product Details Default' type={type} />
            <section className='m-top53px'>
                <div>
                    <div>
                        {product ? (
                            <div>
                                <div className='img-magnify container'>
                                    <div className='border1px'>
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src: img,

                                            },
                                            largeImage: {
                                                src: img,
                                                width: 800,
                                                height: 800
                                            },
                                            enlargedImagePosition: 'over',
                                            lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }

                                        }} />
                                    </div>
                                    <div className='description' data-aos="fade-up">
                                        <h2>{type}</h2>
                                        <h3>Description</h3>
                                        <p>{description}</p>
                                        <h3>Features</h3>
                                        <ul>
                                            {features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className='specification'>
                                    <div className='otherinfo' data-aos="fade-up">
                                        <h3>Specifications</h3>
                                        <ul>
                                            {specifications.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='otherinfo' data-aos="fade-up">
                                        <h3>Other Info</h3>
                                        <ul>
                                            {other_info.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p style={{
                                textAlign: 'center',
                                fontsize: 'large',
                                textTransform: 'uppercase'
                            }}>Product not found</p>
                        )}
                    </div>
                </div>
            </section >
            <section className='m-top53px' data-aos="fade-up">
                <div className='container'>
                    <div className='h1-container'><h1>Related Products</h1></div>
                    <div>
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
                            modules={[Autoplay, Navigation]}

                        >
                            {
                                products?.map((product, index) => {
                                    return (
                                        <SwiperSlide key={product.id} className='related-product'>
                                            <a key={product.id} href={`/Allproduct/${index + 1}`}>
                                                <img src={product.img} width='100' />
                                                <h4>{product.title}</h4>
                                                <p>{`${product.description.slice(0, 48)}...`}</p>
                                                <ul>
                                                    <li><a >Read More</a></li>
                                                </ul>
                                            </a>
                                        </SwiperSlide>
                                    )
                                })

                            }
                        </Swiper>
                    </div>

                </div>
            </section>
            <section className='m-top53px'>

            </section>
        </>
    )
}

export default ProductById
