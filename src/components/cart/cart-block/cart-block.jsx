import React from "react";
import { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../../untils";
import CartMenu from "../cart-menu/cart-menu";
import "./cart-block.css";

export const CartBlock = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const [ CartMenuVisible, SetCartMenuVisible ] = useState(false)

  return (
    <div className="cart-block relative flex flex-col items-center">
      <div className=" cart-block__btn flex justify-center content-center cursor-pointer" onClick={() => SetCartMenuVisible(!CartMenuVisible) }>
        <BiCartAlt size={25} className="mr-3" />
        <span className="total-price">{totalPrice} тг.</span>
      </div>
      {CartMenuVisible && <CartMenu items={items} />}
    </div>
  );
};
