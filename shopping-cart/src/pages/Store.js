import React, { useState, useContext } from "react"
import StoreItem from "../components/StoreItem"
import data from "../data"

function Store() {
    const [storeData, setStoreData] = useState(data)

    return (
        <div className="md:px-8 p-4 mt-10">
            <h1 className="text-xl font-medium uppercase">Popular Collections</h1>

            <div className="md: mt-8 mt-4 grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
                {storeData.map(item => {
                    return <StoreItem key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default Store
