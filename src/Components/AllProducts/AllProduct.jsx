import React, { useEffect } from 'react'
import Breadcrumbs from '../Breadcrumbs'
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
import './AllProducts.css'
function AllProduct() {

  useEffect(() => {
    AOS.init()
  }, [])

  const products = [
    {
      id: uuidv4(),
      img: p1,
      title: 'SG-04 NVR BK-S3',
      description:'The SG-04 NVR BK-S3 is suitable for small to medium-sized businesses, residential security setups, and any other applications requiring reliable video surveillance management. Its flexibility and range of features make it an adaptable solution for various security needs.'
    },
    {
      id: uuidv4(),
      img: p2,
      title: 'SG-08 NVR BK-S3',
      description:'The SG-08 NVR BK-S3 is tailored for environments requiring robust and scalable surveillance solutions. Its advanced features, extensive storage capacity, and high-definition video support make it ideal for businesses, larger residential properties, and other applications needing reliable and comprehensive video surveillance.'
    },
    {
      id: uuidv4(),
      img: p3,
      title: 'SG-16 NVR BK-S3',
      description:'The SG-16 NVR BK-S3 is ideal for environments that demand a robust, scalable, and reliable surveillance solution. Its advanced features, substantial storage capacity, and support for high-definition video make it well-suited for large-scale security needs, ensuring comprehensive coverage and efficient management of extensive surveillance systems.'
    },
    {
      id: uuidv4(),
      img: p4,
      title: 'SG Plus Cable',
      description:'The SG Plus Cable is designed to provide dependable and high-performance networking capabilities, making it an excellent choice for both professional and home networking setups. Its robust construction, compatibility with a range of devices, and support for high-speed data transmission ensure that it meets the demands of modern network environments.'
    },
    {
      id: uuidv4(),
      img: p5,
      title: 'SG Plus SMPS',
      description:'The SG Plus SMPS (Switched-Mode Power Supply) is a high-efficiency power supply unit designed to provide reliable and stable power to a variety of electronic devices and systems.'
    },
    {
      id: uuidv4(),
      img: p6,
      title: 'BNC & DC Connector',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p7,
      title: 'SG-20D BK-S3',
      description:'---'
    },
    {
      id: uuidv4(),
      img: p8,
      title: 'SG-20B BK-S3',
      description:'---'
    },
    {
      id: uuidv4(),
      img: p9,
      title: 'SG-20D BK-S4',
      description:'---'
    },
    {
      id: uuidv4(),
      img: p10,
      title: 'SG-20B BK-S4',
      description:'---'
    },
    {
      id: uuidv4(),
      img: p11,
      title: 'SG-20B BK-IP3',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p12,
      title: 'SG-50B BK-IP3',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p13,
      title: 'SG-20D BK-IP3',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p14,
      title: 'SG-20B BK-IP3',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p15,
      title: 'SG-20D PTNZ-S4',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p16,
      title: 'SG-20B PTNZ-S4',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p17,
      title: 'SG-04DVR BK-S3',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p18,
      title: 'SG-08DVR BK-S3',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p19,
      title: 'SG-16DVR BK-S3',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p20,
      title: 'SG-04DVR BK-S5',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p21,
      title: 'SG-08DVR BK-S4',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    },
    {
      id: uuidv4(),
      img: p22,
      title: 'SG-16DVR BK-S4',
      description:'The BNC (Bayonet Neill-Concelman) connector is a type of coaxial connector widely used in video and RF applications. It features a quick connect/disconnect mechanism with a bayonet mount, making it easy to attach and detach. The BNC connector ensures reliable and stable signal transmission, often used in CCTV systems, broadcast, and test equipment.The DC (Direct Current) connector is used to supply power to electronic devices. It typically consists of a cylindrical plug and socket, with various sizes to fit different devices. The DC connector is commonly found in power adapters for laptops, routers, and other small electronic appliances.'
    }
  ]
  return (
    <div>
      <Breadcrumbs title='All Product'/>
      <section className='m-top53px' data-aos="fade-up">
        <div className='container'>
          <div className='grid-container'>
                {
                  products?.map((product,index)=>{
                        return(
                          <a key={product.id} className='product-child' href={`/Allproduct/${index+1}`}>
                            <h4>{product.title}</h4>
                            <img src={product.img} width='100'/>
                            <h3>Description</h3>
                            <p>{`${product.description.slice(0,58)}...`}</p>
                            <ul>
                              <li><a >Read More</a></li>
                            </ul>
                          </a>
                        )
                  })
                }
          </div>
        </div>
      </section>
      <section className='m-top53px'>

      </section>
    </div>
  )
}

export default AllProduct