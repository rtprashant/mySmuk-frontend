import React from 'react'
import ReviewBox from './ReviewBox'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

function Reviews() {
  return (
    <div className='w-full mt-20 '>
      <div className='flex justify-center'>
        <h1 className='font-outfit text-[#787878] lg:text-[64px] md:text-[64px] text-[24px] sm:text-[48px]'>Customer Reviews</h1>
      </div>
      <div className='flex  px-2 lg:pl-14 sm:justify-center mt-10 justify-center'>
      <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className=" gap-2 flex"
        >
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Reviews
