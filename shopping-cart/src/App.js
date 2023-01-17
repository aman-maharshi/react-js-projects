import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import CartContext from "./CartContext"
import Store from "./pages/Store"
import Cancel from "./pages/Cancel"
import Success from "./pages/Success"

function App() {
    const [showCartSidebar, setShowCartSidebar] = useState(false)
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    function increaseCartQuantity(product) {
        const updatedCart = cart.map(cartItem => {
            if (cartItem.id === product.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                }
            } else {
                return cartItem
            }
        })

        setCart(updatedCart)
    }

    function decreaseCartQuantity(product) {
        if (product.quantity > 1) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === product.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity - 1
                    }
                } else {
                    return cartItem
                }
            })

            setCart(updatedCart)
        } else {
            removeItemFromCart(product)
        }
    }

    function removeItemFromCart(product) {
        const updatedCart = cart.filter(cartItem => cartItem.id !== product.id)
        setCart(updatedCart)
    }

    const contextObject = { cart, setCart }

    return (
        <CartContext.Provider value={contextObject}>
            <div className="min-h-screen">
                <div className="md:px-8 p-4 flex items-center justify-end">
                    {/* <h1 className="text-2xl">Essential Clothing Store</h1> */}

                    <div onClick={() => setShowCartSidebar(!showCartSidebar)} className={`md:p-4 p-2 text-center rounded-xl text-white bg-slate-600 relative z-20 cursor-pointer select-none`}>
                        Cart {cart.length} Items
                    </div>
                </div>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Store />} />
                        <Route path="success" element={<Success />} />
                        <Route path="cancel" element={<Cancel />} />
                    </Routes>
                </BrowserRouter>

                {/* ----- SIDEBAR ----- */}
                <div className={`absolute z-10 top-0 h-full p-4 w-96 bg-white ease-in-out duration-300 flex flex-col ${showCartSidebar ? "sidebar-show" : "sidebar-hide"}`}>
                    <div className="mt-20 flex-1 flex flex-col">
                        <div>
                            {cart.length > 0 ? (
                                <div className="grid grid-cols-3 border-b border-gray-200 pb-2 font-bold">
                                    <div>Item</div>
                                    <div className="text-center">Quantity</div>
                                    <div className="text-right">Price</div>
                                </div>
                            ) : (
                                <div className="text-center">Your cart is empty!</div>
                            )}
                            {cart.map(item => {
                                return (
                                    <div className="grid grid-cols-3">
                                        <div className="my-2">{item.name}</div>
                                        <div className="my-2 flex items-center justify-center">
                                            <button onClick={() => decreaseCartQuantity(item)} className="py-1 px-3 rounded-full border border-solid">
                                                -
                                            </button>
                                            <div className="mx-2">{item.quantity}</div>
                                            <button onClick={() => increaseCartQuantity(item)} className="py-1 px-3 rounded-full border border-solid">
                                                +
                                            </button>
                                        </div>
                                        <div className="my-2 text-right">₹ {item.price * item.quantity}</div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* {cart.length > 0 && (
                            <div className="mt-auto flex items-center justify-between font-bold">
                                <div>Total</div>
                                <div>₹ 0</div>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </CartContext.Provider>
    )
}

export default App
