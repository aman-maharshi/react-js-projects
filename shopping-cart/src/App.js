import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Store from "./pages/Store"
import Cancel from "./pages/Cancel"
import Success from "./pages/Success"

function App() {
    const [showCartSidebar, setShowCartSidebar] = useState(false)

    return (
        <div clasName="relative">
            <div className="md:px-8 p-4 flex items-center justify-end">
                {/* <h1 className="text-2xl">Essential Clothing Store</h1> */}

                <div onClick={() => setShowCartSidebar(!showCartSidebar)} className={`md:p-4 p-2 text-center rounded-xl text-white bg-slate-600 relative z-20 cursor-pointer select-none`}>
                    Cart 0 Items
                </div>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Store />} />
                    <Route path="success" element={<Success />} />
                    <Route path="cancel" element={<Cancel />} />
                </Routes>
            </BrowserRouter>
            <div className={`absolute z-10 top-0 h-full p-4 w-80 bg-white ease-in-out duration-300 ${showCartSidebar ? "sidebar-show" : "sidebar-hide"}`}></div>
        </div>
    )
}

export default App
