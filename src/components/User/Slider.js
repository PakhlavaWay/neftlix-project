import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ collection, moviesImg, absolute, className }) => {
  return (
    <div className={absolute ? 'absolute top-[40vw]' : className}>
      <p className="text-[1.2vw] leading-[1.25vw] mb-3 font-bold !ml-16">{collection}</p>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={4}
        slidesPerView={4}
        loop={true}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="h-auto"
      >
        {moviesImg.map((img) => {
            return (<SwiperSlide>
                <img className='rounded w-full h-full' src={img} alt="thumbnail" />
            </SwiperSlide>)
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
