import { useState, useEffect, useRef } from "react"
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
    const sidebarRef = useRef(null)
    const sidebarToggleButtonRef = useRef(null)

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

    function handleCloseMobileNav(e) {
        if (sidebarRef.current && showCartSidebar && !sidebarRef.current.contains(e.target) && !sidebarToggleButtonRef.current.contains(e.target)) {
            setShowCartSidebar(!showCartSidebar)
        }
    }
    
    useEffect(() => {
        document.addEventListener("mousedown", handleCloseMobileNav)
        return () => document.removeEventListener("mousedown", handleCloseMobileNav)
    }, [showCartSidebar])
    

    const contextObject = {
        cart,
        setCart,
        showCartSidebar,
        setShowCartSidebar,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        cartTotalValue
    }

    return (
        <CartContext.Provider value={contextObject}>
            <div>
                <div className="md:px-8 p-4 flex items-center justify-between bg-white shadow-sm">
                    <h1 className="text-xl">Essentials</h1>
                    <div ref={sidebarToggleButtonRef} onClick={() => setShowCartSidebar(!showCartSidebar)} className={`flex items-center gap-4 relative z-20 cursor-pointer select-none`}>
                        <span className="h-8 w-8 rounded-full flex items-center justify-center text-white bg-zinc-900">
                            {cart.length}
                        </span>
                        <span className="text-xl">☰</span>
                    </div>
                </div>

                <Store />

                {/* <BrowserRouter>
                    <Routes>
                        <Route index element={<Store />} />
                        <Route path="success" element={<Success />} />
                        <Route path="cancel" element={<Cancel />} />
                    </Routes>
                </BrowserRouter> */}

                <Sidebar sidebarRef={sidebarRef} />

                <div className="footer absolute w-full left-0 bottom-0 text-center p-4 text-zinc-400">
                    Designed and Coded by <a href="https://amanmaharshi.com" className="font-medium hover:text-zinc-500 ease-in-out duration-500">Aman Maharshi</a>
                </div>
            </div>
        </CartContext.Provider>
    )
}

export default App
