// src/Gallery.js
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Gallery.css';
import Breadcrumbs from '../Breadcrumbs';
import sg1 from '../../Assets/img1.jpg'
import sg2 from '../../Assets/img2.jpg'
import sg3 from '../../Assets/img3.jpg'
import sg4 from '../../Assets/img4.jpg'
import sg5 from '../../Assets/img5.jpg'
import sg6 from '../../Assets/img6.jpg'
import sg7 from '../../Assets/img7.jpg'
import sg8 from '../../Assets/img8.jpg'
import sg9 from '../../Assets/img9.jpg'
import sg10 from '../../Assets/img10.jpg'
import sg11 from '../../Assets/img11.jpg'
import sg12 from '../../Assets/img23.jpg'

const images = [
  sg1, sg2, sg3, sg4, sg5, sg6, sg7, sg8, sg9, sg10, sg11,sg12
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <Breadcrumbs title='Photos' />
      <section className='m-top53px'>
        <div className='container'>
          <div className="gallery">
            {images.map((src, index) => (
              <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                <LazyLoadImage
                  className='lazy'
                  effect="blur"
                  src={src}
                  alt={`Gallery ${index}`}
                />
              </div>
            ))}

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
