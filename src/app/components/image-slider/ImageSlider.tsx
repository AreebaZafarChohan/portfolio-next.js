import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation}  from "swiper/modules";
import Image from 'next/image';

// Import Swiper Style
import "swiper/css";
import "swiper/css/navigation";

const images = [
    { src: "/images/ts.jpg", name: "TypeScript Logo Image"},
    { src: "/images/bootsrap.jpg", name: "Bootstrap Logo Image"},
    { src: "/images/js.jpg", name: "JavaScript Logo Image"},
    { src: "/images/tailwind.jpg", name: "Tailwind Logo Image"},
    { src: "/images/nextjs.jpg", name: "Next.js Logo Image"},
    { src: "/images/html.jpg", name: "HTML Logo Image"},
    { src: "/images/css.jpg", name: "CSS Logo Image"},
];

const ImageSlider: React.FC = () => {
  return (
    <Swiper 
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    loop={true}
    breakpoints={{
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }}
    className="w-full h-full"
    >
        {images.map((image, index) => {
            <SwiperSlide key={index}>
                <Image
                src={image.src}
                alt={image.name}
                width={500}
                height={500}
                className="w-full h-full object-cover" 
                />
            </SwiperSlide>
        })}
      
    </Swiper>
  );
};

export default ImageSlider;
