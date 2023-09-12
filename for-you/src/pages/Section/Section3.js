import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Section3 = () => {
  return (
    <section>
      <div className="section-third">
        <div className="container">
          <div className="section-third-txt">
            <h2 className="section-third-main">즐거운 프로그램</h2>
            <p className="section-third-sub">
              재미있고 흥미로운 프로그램이 진행되고 있습니다.
            </p>
          </div>
          <div className="section-third-wrap">
            <a className="section-third-wrap-item">
              <b>매일매일 퀴즈 풀고 선물 받으세요!</b>
              <span>2023.09.07 - 2023.10.06</span>
              <div className="icon-angle">
                <FaAngleRight />
              </div>
            </a>
            <a className="section-third-wrap-item">
              <b>매일매일 퀴즈 풀고 선물 받으세요!</b>
              <span>2023.09.07 - 2023.10.06</span>
              <div className="icon-angle">
                <FaAngleRight />
              </div>
            </a>
            <a className="section-third-wrap-item">
              <b>매일매일 퀴즈 풀고 선물 받으세요!</b>
              <span>2023.09.07 - 2023.10.06</span>
              <div className="icon-angle">
                <FaAngleRight />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
