import React, { useState, useContext } from "react"
import StoreItem from "../components/StoreItem"
import data from "../data"

function Store() {
    const [storeData, setStoreData] = useState(data)

    return (
        <div className="md:px-8 p-4 mt-6">
            <h1 className="text-xl font-medium uppercase">Popular Collections</h1>

            <div className="mt-8 mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
                {storeData.map(item => {
                    return <StoreItem key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default Store
