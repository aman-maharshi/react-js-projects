import React, { useState, useContext } from "react"
import CartContext from "../CartContext"

function StoreItem({ item }) {
    const { cart, setCart } = useContext(CartContext)

    const itemAlreadyInCart = cart.find(cartItem => cartItem.id === item.id)

    function addItemToCart() {
        if (itemAlreadyInCart) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }
                } else {
                    return cartItem
                }
            })

            setCart(updatedCart)
        } else {
            setCart([
                ...cart,
                {
                    ...item,
                    quantity: 1
                }
            ])
        }
    }

    return (
        <div key={item.id} className="p-4 bg-white rounded-xl text-center shadow-md">
            <div className="flex items-center justify-between mb-4">
                <p className="text-xl">{item.name}</p>
                <p className="text-xl p-2 rounded-full bg-teal-100">₹ {item.price}</p>
            </div>

            <button onClick={addItemToCart} className="py-2 px-4 rounded-full border border-teal-500 text-teal-500">
                Add to Cart
            </button>
        </div>
    )
}

export default StoreItem
