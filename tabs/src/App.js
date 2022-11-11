import React, { useState } from "react"
import data from "./data"
import CollectionItem from "./CollectionItem"
import { motion, AnimatePresence } from "framer-motion"

function App() {
    const [collectionItems, setCollectionItems] = useState(data)

    const handleTabClick = (e, category) => {
        Array.from(document.querySelectorAll("button")).forEach((item) => {
            if (item.classList.contains("active")) {
                item.classList.remove("active")
            }
        })
        e.target.classList.add("active")

        if (category === "all") {
            setCollectionItems(data)
        } else {
            const allItems = data
            const filteredItems = allItems.filter(
                (item) => item.category === category
            )
            setCollectionItems(filteredItems)
        }
    }

    return (
        <div>
            <div className="wrapper">
                <h1>Our Collection</h1>
                <div className="tabs">
                    <button
                        className="active"
                        onClick={(e) => handleTabClick(e, "all")}
                    >
                        All
                    </button>
                    <button onClick={(e) => handleTabClick(e, "shirt")}>
                        Shirts
                    </button>
                    <button onClick={(e) => handleTabClick(e, "shoes")}>
                        Shoes
                    </button>
                    <button onClick={(e) => handleTabClick(e, "other")}>
                        Others
                    </button>
                </div>
                <motion.div layout className="collection">
                    <AnimatePresence>
                        <CollectionItem items={collectionItems} />
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}

export default App
