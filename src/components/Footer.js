import React from 'react';
import { Link } from 'react-router-dom';
import { RiKakaoTalkFill, RiInstagramLine, RiYoutubeFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer>
      <ul className="footer-inner">
        <div className="footer-inner-top">
          <div className="logo"></div>
          <ul>
            <li>
              <Link to="https://naver.com" target="_blank" className="icon-kakao">
                <RiKakaoTalkFill />
              </Link>
            </li>
            <li>
              <Link to="https://naver.com" target="_blank" className="icon-insta">
                <RiInstagramLine />
              </Link>
            </li>
            <li>
              <Link to="https://naver.com" target="_blank" className="icon-youtube">
                <RiYoutubeFill />
              </Link>
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
            <li>
              <b>TEL</b>
              <span>010-1234-5678</span>
            </li>
            <li>
              <b>E-mail</b>
              <span>abcd@gmail.com</span>
            </li>
          </ul>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
