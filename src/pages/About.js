import React from 'react';

import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="layout">
      <Header />
      <section>
        <article className="sub-top">
          <h2 className="sub-top-tit">ABOUT</h2>
          <p className="sub-top-dec">아이들과 함께 편안하고 즐거운 추억을 만들어보세요.</p>
        </article>
        <article className="sub-content">
          <p className="about-tit">
            서울에서 가장 넓고 쾌적한 <br />
            <b>서울 아몬드키즈풀빌라 </b>
            <br />
            <b>남포점</b>입니다.
          </p>
          <p className="about-dec">
            안녕하세요. 부산 아몬드키즈풀빌라 남포점입니다. <br />
            부산에서 가장 넓고 쾌적한 대형 객실을 갖추고 있는 프리미엄 키즈 풀빌라입니다. <br />
            푸른 바다와 도심의 아름다움을 느끼면서 편안하고 즐거운 추억을 만들어보세요. <br />
            부산을 대표하는 다양한 볼거리, 먹거리, 놀거리를 경험하실 수 있습니다.
          </p>
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={10}
            loop={Infinity}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="about-slider">
            <SwiperSlide className="about-slider-item">Slide 1</SwiperSlide>
            <SwiperSlide className="about-slider-item">Slide 2</SwiperSlide>
            <SwiperSlide className="about-slider-item">Slide 3</SwiperSlide>
            <SwiperSlide className="about-slider-item">Slide 4</SwiperSlide>
          </Swiper>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default About;
