import React from 'react'
import { calcTotalPrice } from '../../../untils'
import CartItem from '../../product-item/product-item'
import Button from '../../UI/button/button'
import './cart-menu.css'

export default function CartMenu({items, onClick}) {
  return (
    <div className="cart-menu absolute rounded-xl bg-white border-solid border-2 border-gray-400 flex flex-col flex-nowrap justify-evenly p-3">
      <div className="cart-menu__items-list flex justify-center flex-col items-center">
        {items.length > 0
          ? items.map((cart) => (
              <CartItem size='s' cart={cart} key={cart.id}/>
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price my-2">
            <span>Итого:</span>
            <b>{calcTotalPrice(items)} тг.</b>
          </div>
          <Button type="none" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  )
}
