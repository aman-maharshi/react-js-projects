import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import CartContext from "./CartContext"
import Store from "./pages/Store"
import Cancel from "./pages/Cancel"
import Success from "./pages/Success"
import Sidebar from "./components/Sidebar"

function App() {
    const [showCartSidebar, setShowCartSidebar] = useState(false)
    const [cart, setCart] = useState([])
    const [cartTotalValue, setCartTotalValue] = useState(0)

    useEffect(() => {
        calculateCartTotalValue()
    }, [cart])

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

    function calculateCartTotalValue() {
        let sum = 0
        cart.forEach(item => {
            sum += item.price * item.quantity
        })

        setCartTotalValue(sum)
    }

    const contextObject = {
        cart,
        setCart,
        showCartSidebar,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        cartTotalValue
    }

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

                <Sidebar />
            </div>
        </CartContext.Provider>
    )
}

export default App
