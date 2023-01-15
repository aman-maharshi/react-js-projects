import React, { useState } from "react"
import data from "../data"

function Store() {
    const [storeData, setStoreData] = useState(data)

    return (
        <div className="md:px-8 p-4">
            <h1 className="md:text-3xl text-xl font-medium">Popular Collections</h1>

            <div className="md: mt-8 mt-4 grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
                {storeData.map(item => {
                    return (
                        <div className="p-4 bg-white rounded-xl text-center shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-xl">{item.title}</p>
                                <p className="text-xl p-2 rounded-full bg-teal-100">{item.price}</p>
                            </div>
                            <button className="py-2 px-4 rounded-full border border-teal-500 text-teal-500">Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Store
