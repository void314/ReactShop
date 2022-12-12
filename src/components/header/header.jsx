import React from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart/cart-block/cart-block";

import "./header.css";

export const Header = () => {
  return (
    <div className="header flex justify-between align-middle">
      <Link to="/" className="header__store-title flex justify-center align-middle">
          <img width={40} height={40} src='./img/header-logo.svg' alt='Header-logo' className="mr-5"/>
          <div className='header-logo__title'>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
      </Link>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
