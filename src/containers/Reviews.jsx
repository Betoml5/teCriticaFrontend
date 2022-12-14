import React, { useEffect, useState } from "react";
import Review from "../components/Review";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import { findSalesByColumnAPI } from "../services/review";
import LoaderIcon from "../assets/static/loader.png";

const Reviews = () => {
  const [reviews, setReviews] = useState({
    column1: [],
    column2: [],
    column3: [],
    column4: [],
  });

  const getAllReviewsByColumn = async () => {
    const response = await findSalesByColumnAPI();

    setReviews({
      column1: response.column1,
      column2: response.column2,
      column3: response.column3,
      column4: response.column4,
    });
  };

  useEffect(() => {
    getAllReviewsByColumn();
  }, []);

  if (
    reviews.column1?.length === 0 ||
    reviews.column2?.length === 0 ||
    reviews.column3?.length === 0 ||
    reviews.column4?.length === 0
  ) {
    return (
      <div className="flex w-full items-center justify-center mt-20">
        <img src={LoaderIcon} alt="loader" className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  if (
    !reviews.column1?.length &&
    !reviews.column2?.length &&
    !reviews.column3?.length &&
    !reviews.column4?.length
  ) {
    return (
      <div className="text-white text-xl p-4">
        No hay nada que mostrar por aqui...
      </div>
    );
  }

  return (
    <div className=" bg-[#222831] my-2 ">
      <Swiper
        className="my-5"
        loop={true}
        speed={1200}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={3}
      >
        {reviews?.column1?.map((review) => (
          <SwiperSlide>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="my-5"
        loop={true}
        speed={1200}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={3}
      >
        {reviews?.column2?.map((review) => (
          <SwiperSlide>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="my-5"
        loop={true}
        speed={2000}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={3}
      >
        {reviews?.column3?.map((review) => (
          <SwiperSlide>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="my-5"
        loop={true}
        speed={2000}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={3}
      >
        {reviews?.column4?.map((review) => (
          <SwiperSlide>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
