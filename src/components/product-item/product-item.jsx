import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { setCurrentItem } from '../../redux/product/reducer';
import Button from '../UI/button/button'
import './product-item.css'

export default function ProductItem({ cart, size='m' }) {
    const dispatch = useDispatch();

    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === cart.id);

    const navigate = useNavigate()

    function handleClick(e) {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(cart));
        } else {
            dispatch(setItemInCart(cart));
        }
    }

    const OpenItemInfo = () => {
        dispatch(setCurrentItem(cart))
        navigate(`/${cart.title}`)
    }

    if (size === 'm') {
        return (
            <div onClick={OpenItemInfo} className='cart-item bg-white border-solid border-2 border-gray-400 flex flex-col justify-between align-middle rounded-xl mb-10 p-3 cursor-pointer'>
                <img width={130} height={120} src={cart.image} alt='cart-item__img' className='mx-auto' />
    
                <div className="cart-item__details flex flex-col justify-between align-middle">
                    <h3 className="cart-item__title">{cart.title}</h3>
                    <div className='cart-item__buy flex flex-nowrap justify-between align-middle'>
                        <div className="cart-item__price flex flex-col flex-nowrap justify-start">
                            <span>цена: </span>
                            <b>{cart.price} тг.</b>
                        </div>
                        <Button className={' flex content-center justify-center py-2 rounded-xl '} type={isItemInCart ? 'close' : 'add'} fill='#43846b' onClick={handleClick}></Button>
                    </div>
                </div>
            </div>
        )
    }else if (size === 's') {
        return (
            <div className=' cart-item cart-item--slim bg-white border-solid border-2 border-gray-400 flex justify-center items-center rounded-xl mb-2 p-1 cursor-pointer' onClick={OpenItemInfo}>
                <img width={50} height={50} src={cart.image} alt='cart-item__img' className='mx-auto' />
    
                <div className="cart-item__details flex flex-col justify-evenly align-middle">
                    <h3 className="cart-item__title cart-item__title--slim overflow-hidden text-ellipsis whitespace-nowrap">{cart.title}</h3>
                    <div className='cart-item__buy flex flex-nowrap justify-between align-middle'>
                        <div className="cart-item__price flex flex-col flex-nowrap justify-start">
                            <span>цена: </span>
                            <b>{cart.price} тг.</b>
                        </div>
                        <Button className={' flex content-center justify-center py-2 rounded-xl '} type={isItemInCart ? 'close' : 'add'} fill='#43846b' onClick={handleClick}></Button>
                    </div>
                </div>
            </div>
        )
    }
}

// VscAdd