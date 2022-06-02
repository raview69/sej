import React from 'react'

const CartList = ({ cartData }) => {
    const dataCart = cartData.map((items, index) => (
        <li key={index} className="w-56 py-2">
            <div>
                <img src={items[1]} alt={items[0]} />
                <div className="">{items[0]}</div>
                <div className="text-sm font-extralight py-2">
                    By: {items[2]}
                </div>
                <div className="text-sm font-extralight">
                    Description: {items[3]}
                </div>
            </div>
        </li>
    ))
    return (
        <div className="flex items-center justify-center">
            <ul className="grid lg:gap-4 lg:grid-cols-3 sm:gap-4 sm:grid-cols-2 sm:px-2">
                {dataCart}
            </ul>
        </div>
    )
}

export default CartList
