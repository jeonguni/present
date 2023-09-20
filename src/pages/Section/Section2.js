import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Section2 = () => {
  return (
    <section>
      <div className="section-second">
        <div className="container">
          <div className="section-second-txt">
            <h2 className="section-second-main">
              단 한 번의 구독으로 <br />
              수만 가지 검증된 <br />
              콘텐츠를
            </h2>
            <p className="section-second-sub">
              6만여 편의 브랜드 도서, 유명 영어 학습 콘텐츠, <br />
              인기 크리에이터의 다양한 콘텐츠 속에서
              <br />
              우리 아이의 관심사를 찾아보세요.
            </p>
          </div>
          <Swiper
            spaceBetween={10}
            loop={Infinity}
            slidesPerView={2}
            className="main-slider"
          >
            <SwiperSlide className="main-slider-item">Slide 1</SwiperSlide>
            <SwiperSlide className="main-slider-item">Slide 2</SwiperSlide>
            <SwiperSlide className="main-slider-item">Slide 3</SwiperSlide>
            <SwiperSlide className="main-slider-item">Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Section2;
