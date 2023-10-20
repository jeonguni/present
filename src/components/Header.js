import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to={`${process.env.PUBLIC_URL}/present`} className="logo">
        업체이름 입력
      </Link>
      <ul className="gnb">
        <li>
          <Link to="/About">About</Link>
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
