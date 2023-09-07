import React from "react";

const Section1 = () => {
  return (
    <section>
      <div className="section-first">
        <div className="container">
          <div className="section-first-txt">
            <h2 className="section-first-main">
              시작하자
              <br />
              동화유학
            </h2>
            <p className="section-first-sub">
              동화로 시작하는 우리 아이 첫 배움 <br />
              아이들나라로 동화유학 보내세요 <br />
              통신사 상관없이 첫 달 무료!
            </p>
            <button type="button" className="btn-primary">
              전화상담
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
