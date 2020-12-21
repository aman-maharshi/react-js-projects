import React, { useState, useEffect } from "react"
import data from "./data"
import CollectionItem from "./CollectionItem"

function App() {
    const [collectionItems, setCollectionItems] = useState([])

    useEffect(() => {
        setCollectionItems(data)
    }, [])

    const handleTabClick = category => {
        if (category === "all") {
            setCollectionItems(data)
        } else {
            const allItems = data
            const filteredItems = allItems.filter(item => item.category === category)
            setCollectionItems(filteredItems)
        }
    }

    return (
        <div>
            <div className="wrapper">
                <h1>Our Collection</h1>
                <div className="tabs">
                    <button onClick={() => handleTabClick("all")}>All</button>
                    <button onClick={() => handleTabClick("shirt")}>Shirts</button>
                    <button onClick={() => handleTabClick("shoes")}>Shoes</button>
                    <button onClick={() => handleTabClick("other")}>Others</button>
                </div>
                <div className="collection">
                    <CollectionItem items={collectionItems} />
                </div>
            </div>
        </div>
    )
}

export default App
