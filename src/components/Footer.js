import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-inner">
        <div className="footer-inner-top">
          <div className="logo"></div>
          <ul>
            <li>
              <a>필요한</a>
            </li>
            <li>
              <a>SNS</a>
            </li>
            <li>
              <a>링크</a>
            </li>
          </ul>
        </div>
        <div className="footer-inner-bottom">
          <ul>
            <li>
              <b>상호</b>
              <span>무슨무슨회사</span>
            </li>
            <li>
              <b>대표</b>
              <span>김뭐뭐</span>
            </li>
            <li>
              <b>사업자등록번호</b>
              <span>123-45-6789</span>
            </li>
          </ul>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
