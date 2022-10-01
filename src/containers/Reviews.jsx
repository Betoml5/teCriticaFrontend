import React from "react";
import Review from "../components/Review";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";

const Reviews = ({ reviews }) => {
  return (
    <div className="h-screen my-2">
      <Swiper
        className="m-2"
        loop
        freeMode
        speed={1000}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        spaceBetween={5}
        slidesPerView={3}
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
