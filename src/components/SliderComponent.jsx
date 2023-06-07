// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function SliderComponent() {
  return (
    <>
      <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper h-[150px]"
      >
        <SwiperSlide>
          <img
            src="/speciality-speed.svg"
            alt="image slide 1"
            className="m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/speciality-2.svg"
            alt="image slide 2"
            className="m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/speciality-3.svg"
            alt="image slide 3"
            className="m-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}