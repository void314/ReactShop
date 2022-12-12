import React from 'react';
import ProductItem from '../../components/product-item/product-item';
import './home-page.css';

const Cart = [
    {
        image: './img/content1.png',
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 2343,
        id: 1,
        description: "Супер крутое описание тавара и его плюсов",
    },
    {
        image: './img/content1.png',
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 3413,
        id: 2,
        description: "Супер крутое описание тавара и его плюсов",
    },
    {
        image: './img/content1.png',
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 2343,
        id: 3,
        description: "Супер крутое описание тавара и его плюсов",
    },
    {
        image: './img/content1.png',
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 3413,
        id: 4,
        description: "Супер крутое описание тавара и его плюсов",
    },
    {
        image: './img/content1.png',
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 1250,
        id: 5,
        description: "Супер крутое описание тавара и его плюсов",
    },
    {
        image: './img/content1.png',
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 2343,
        id: 6,
        description: "Супер крутое описание тавара и его плюсов",
    },
    {
        image: './img/content1.png',
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 4343,
        id: 7,
        description: "Супер крутое описание тавара и его плюсов",
    },
    {
        image: './img/content1.png',
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 1343,
        id: 8,
        description: "Супер крутое описание тавара и его плюсов",
    },
]

export const HomePage = () => {
    return (
        <div className="home-page flex flex-wrap align-middle justify-around my-5">
            { Cart.map(cart => <ProductItem cart={cart} key={cart.id}/>) }
        </div>
    )
}
