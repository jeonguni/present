import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Service = () => {
  return (
    <div className="layout">
      <Header />
      <section>
        <article className="sub-top">
          <h2 className="sub-top-tit">SERVICE</h2>
          <p className="sub-top-dec">해피퍼피의 서비스를 소개합니다.</p>
        </article>
        <article className="sub-content">
          <div className="service-box">
            <div className="service-img">
              <img src="./assets/images/bg/bg-main-red.svg" />
            </div>
            <div className="service-tit">
              <h3>HAPPY PUPPY KINDERGARTEN</h3>
              <span>해피퍼피 반려견 유치원</span>
              <p>
                해피퍼피에서 운영하는 강아지 유치원은 다양한 프로그램과 관리 시스템으로 많은 견주분들의 사랑을 받고
                있습니다. 강이지 피트니스부터, 수영, 산책과 같은 동적인 프로그램부터, 간식 찾기, 미각 놀이와 같은 교육적
                프로그램 또한, 강아지 생일파티, 야외소풍까지 다양한 프로그램을 통해 견주들뿐만 아니라 강아지들을 위한
                프로그램이 운영되고 있습니다.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-img">
              <img src="./assets/images/bg/bg-main-red.svg" />
            </div>
            <div className="service-tit">
              <h3>HAPPY PUPPY HOTEL</h3>
              <span>해피퍼피 반려견 호텔</span>
              <p>
                해피퍼피에서는 견주분들이 해외여행 혹은 출장과 같이 불가피한 사정으로 반려견과 떨어져 있어야 하는 경우를
                생각하여 반려견 호텔을 운영하고 있습니다. 견주와 떨어진 반려견들이 건강하게 있을 수 있도록 최상의
                환경으로 강아지를 돌봅니다.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-img">
              <img src="./assets/images/bg/bg-main-red.svg" />
            </div>
            <div className="service-tit">
              <h3>HAPPY PUPPY SPA & BEAUTY</h3>
              <span>해피퍼피 강아지 미용 & 스파살롱</span>
              <p>
                해피퍼피에서는 강아지 미용까지 관리하고 있습니다. 27년 경력 대한민국 2대 베테랑 실장님의 손길로
                반려견들이 스트레스 없이 편안한 분위기에서 세련된 스타일링을 찾을 수 있으며, 강아지 전용 히노끼탕,
                미이크로버블, 탄산스파를 제공하고 있습니다.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-img">
              <img src="./assets/images/bg/bg-main-red.svg" />
            </div>
            <div className="service-tit">
              <h3>HAPPY PUPPY PICKUP SERVICE</h3>
              <span>해피퍼피 픽업 서비스</span>
              <p>
                해피퍼피에서는 픽업 서비스를 지원하고 있습니다. 아이들을 안전하게 태우고 집에서부터 해피퍼피까지, 또
                해피퍼피에서 집까지 운행하는 픽업 서비스로 견주분들의 편의를 제공하고 있습니다. 물론 언제나 안전
                운전으로 반려견들의 안전은 잊지 않고 운행합니다. (강남, 서초 지역 한정, 그중 일부 지역은 제외)
              </p>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Service;
