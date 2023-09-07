import React from "react";

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <h1>업체이름 입력</h1>
      </a>
      <ul className="gnb">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Program</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
