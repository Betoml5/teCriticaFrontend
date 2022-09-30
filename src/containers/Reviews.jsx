import React from "react";

import Review from "../components/Review";
import "../styles/containers/Reviews.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

const Reviews = ({ reviews }) => {
  return (
    <div className="my-2">
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
        {reviews.map((review) => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <SwiperSlide>
              <Review review={review} background={randomColor} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        className="m-2"
        fadeEffect={{ crossFade: true }}
        loop
        freeMode
        speed={1000}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={5}
        slidesPerView={3}
      >
        {reviews.map((review) => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <SwiperSlide>
              <Review review={review} background={randomColor} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        className="m-2"
        fadeEffect={{ crossFade: true }}
        loop
        freeMode
        speed={2000}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={5}
        slidesPerView={3}
      >
        {reviews.map((review) => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <SwiperSlide>
              <Review review={review} background={randomColor} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        fadeEffect={{ crossFade: true }}
        loop
        freeMode
        speed={2500}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={5}
        slidesPerView={3}
      >
        {reviews.map((review) => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <SwiperSlide>
              <Review review={review} background={randomColor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
