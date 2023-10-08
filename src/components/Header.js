import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="HeaderContainer">
      <img
        className="logo"
        src="https://tse2.mm.bing.net/th?id=OIP.zeYbojw3hyzUz8DIzfVnagHaEK&pid=Api&P=0&h=220"
      />
      <ul className="HeaderContainer_ul">
        <Link to="/" className="HeaderContainer_li">
          Home
        </Link>
        <Link to="/about" className="HeaderContainer_li">
          About us
        </Link>
        <li className="HeaderContainer_li">Contact us</li>
        <li className="HeaderContainer_li">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
