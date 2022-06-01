import React from 'react'

const CartList = ({ cartData }) => {
    const dataCart = cartData.map((items, index) => (
        <li key={index} className="w-56">
            <div>
                <img src={items[1]} alt={items[0]} />
                <div className="">{items[0]}</div>
                <div className="text-sm font-extralight">{items[2]}</div>
            </div>
        </li>
    ))
    return (
        <div className="flex items-center justify-center">
            <ul className="grid gap-4 grid-cols-2">{dataCart}</ul>
        </div>
    )
}

export default CartList
