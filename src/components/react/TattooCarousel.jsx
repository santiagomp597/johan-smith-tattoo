import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import slide_image_1 from '../../assets/tattoo_1.jpeg';
import slide_image_2 from '../../assets/tattoo_2.jpeg';
import slide_image_3 from '../../assets/tattoo_3.jpeg';
import slide_image_4 from '../../assets/tattoo_4.jpeg';
import slide_image_5 from '../../assets/tattoo_5.jpeg';

function TattooCarousel() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 2.5,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 5000000,
          disableOnInteraction: false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1.src} alt="tattoo_1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2.src} alt="tattoo_2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3.src} alt="tattoo_3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4.src} alt="tattoo_4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5.src} alt="tattoo_5" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default TattooCarousel;
