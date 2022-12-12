import React from 'react'
import { BiAddToQueue, BiHeart } from "react-icons/bi";
import { VscCloseAll } from "react-icons/vsc"
import './button.css'

export default function Button({
    onClick,
    type = 'text',
    className,
    children,
    fill = '#000'
}) {
    if (type === 'add') {
        return (
            <button className={className} onClick={onClick}><BiAddToQueue size={24} />{children}</button>
        )
    } else if (type === 'close') {
        return (
            <button className={className} onClick={onClick}><VscCloseAll fill={fill !== '#000' ? fill: '#000'} size={24} />{children}</button>
        )
    } else if (type === 'like') {
        return (
            <button className={className} onClick={onClick}>
                <div className='flex flex-nowrap align-middle justify-evenly'>
                    <BiHeart size={24}/>
                    <span >{children}</span>
                </div>
            </button>
        )
    }
    else if ((type === 'none') || (type === '') || (type === 'text')) {
        return (
            <button className={className + ' flex c'} onClick={onClick}>
                <div className='btn-content flex flex-nowrap align-middle justify-evenly rounded-xl p-3 text-white'>
                    <span>{children}</span>
                </div>
            </button>
        )
    }
}
