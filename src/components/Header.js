import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="HeaderContainer flex justify-between bg-red-50 shadow-lg mb-2 h-20">
      <img
        className="logo w-24"
        src="https://tse2.mm.bing.net/th?id=OIP.zeYbojw3hyzUz8DIzfVnagHaEK&pid=Api&P=0&h=220"
      />
      <ul className="HeaderContainer_ul flex items-center">
        <Link to="/" className="HeaderContainer_li m-1 px-2 hover:bg-red-100">
          Home
        </Link>
        <Link
          to="/about"
          className="HeaderContainer_li m-1 px-2 hover:bg-red-100"
        >
          About us
        </Link>
        <li className="HeaderContainer_li m-1 px-2 hover:bg-red-100">
          Contact us
        </li>
        <li className="HeaderContainer_li m-1 px-2 hover:bg-red-100">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
