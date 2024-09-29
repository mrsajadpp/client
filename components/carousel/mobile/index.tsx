'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CustomCarousel = () => {
  const slides = [
    {
      image: 'https://www.cinecast.xyz/src/img/thumbnail/death-note.webp',
      title: 'First Slide',
      description: 'This is the first demo slide.',
      link: '/first',
    },
    {
      image: 'https://www.cinecast.xyz/src/img/thumbnail/chainsaw-man.webp',
      title: 'Second Slide',
      description: 'This is the second demo slide.',
      link: '/second',
    },
    {
      image: 'https://www.cinecast.xyz/src/img/thumbnail/death-note.webp',
      title: 'Third Slide',
      description: 'This is the third demo slide.',
      link: '/third',
    },
  ];

  return (
    <>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      <div id="carouselExampleIndicators" className="carousel slide" style={{ marginTop: '70px', overflow: 'hidden', borderRadius: '10px', width: 'calc(100% - 20px)', marginLeft: '10px', marginRight: '10px' }} data-ride="carousel">
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <Link href={slide.link}>
                <Image className="d-block w-100" src={slide.image} alt={slide.title} width={800} height={200} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomCarousel;
