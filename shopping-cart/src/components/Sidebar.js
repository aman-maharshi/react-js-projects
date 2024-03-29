import React, { useContext } from "react"
import CartContext from "../CartContext"

function Sidebar({ sidebarRef }) {
    const { cart, showCartSidebar, setShowCartSidebar, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart, cartTotalValue } = useContext(CartContext)

    return (
        <div ref={sidebarRef} className={`absolute z-10 top-0 right-0 h-[100vh] p-4 md:w-96 w-80 bg-white ease-in-out duration-300 flex flex-col shadow-xl ${showCartSidebar ? "sidebar-show" : "sidebar-hide"}`}>
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
                            <div key={item.id} className="grid grid-cols-3">
                                <div className="my-2 flex items-center">
                                    {item.name}{" "}
                                    <button onClick={() => removeItemFromCart(item)} className="ml-2 text-xl text-red-500">
                                        ⨯
                                    </button>
                                </div>
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
                {cart.length > 0 && (
                    <>
                        <div className="mt-auto flex items-center justify-between font-bold">
                            <div>Total</div>
                            <div>₹ {cartTotalValue}</div>
                        </div>
                        <button onClick={() => setShowCartSidebar(false)} className="mt-8 py-2 px-4 text-white font-bold text-zinc-900 border border-zinc-900 ease-in-out duration-500 hover:text-white hover:bg-zinc-900">
                            Proceed to Buy
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Sidebar
