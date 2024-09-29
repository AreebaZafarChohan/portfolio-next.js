"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const images = [
    { path: "/images/ts.jpg", name: "TypeScript Logo Image"},
    { path: "/images/bootstrap.jpg", name: "Bootstrap Logo Image"},
    { path: "/images/js.jpg", name: "JavaScript Logo Image"},
    { path: "/images/tailwind.jpg", name: "Tailwind Logo Image"},
    { path: "/images/nextjs.jpg", name: "Next.js Logo Image"},
    { path: "/images/html.jpg", name: "HTML Logo Image"},
    { path: "/images/css.jpg", name: "CSS Logo Image"},
];

 const ImageSlider: React.FC = () => {
  return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {images.map((image, index) => (
            <SwiperSlide key={index}>
                <img
                src={image.path}
                alt={image.name}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-xl" 
/>
            </SwiperSlide>
      ))
        }

      </Swiper>
  );
};

export default ImageSlider;
