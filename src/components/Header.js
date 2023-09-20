import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <h1>업체이름 입력</h1>
      </a>
      <ul className="gnb">
        <li>
          <Link to="/About"></Link>
        </li>
        <li>
          <Link to="/Service">Service</Link>
        </li>
        <li>
          <Link to="/Program">Program</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
