import React, { useContext } from "react"
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
        <div key={item.id} className="p-4 bg-white shadow-md">
            <div className="flex items-center justify-between mb-4">
                <p className="md:text-xl truncate">{item.name}</p>
                <p className="md:text-xl md:p-2 p-1 font-medium">₹ {item.price}</p>
            </div>

            <div className="flex items-center justify-between md:flex-row flex-col">
                <button onClick={addItemToCart} className="px-2 border border-zinc-900">
                    Add to Cart +
                </button>
                {itemAlreadyInCart && <p className="text-gray-500">✅</p>}
            </div>
        </div>
    )
}

export default StoreItem
