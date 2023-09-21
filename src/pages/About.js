import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="layout">
      <Header />
      <section>
        <article className="sub-top">
          <h2 className="sub-top-tit">ABOUT</h2>
          <p className="sub-top-dec">아이들과 함께 편안하고 즐거운 추억을 만들어보세요.</p>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default About;
