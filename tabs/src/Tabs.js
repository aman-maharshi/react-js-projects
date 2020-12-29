import React from "react"
import data from "./data"

function Tabs({ setCollectionItems }) {
    const handleTabClick = (e, category) => {
        Array.from(document.querySelectorAll("button")).forEach(item => {
            if (item.classList.contains("active")) {
                item.classList.remove("active")
            }
        })
        e.target.classList.add("active")

        if (category.item === "all") {
            setCollectionItems(data)
        } else {
            const allItems = data
            const filteredItems = allItems.filter(item => item.category === category.item)
            setCollectionItems(filteredItems)
        }
    }

    const catetories = data.map(item => item.category)
    let uniqueCatetories = new Set(catetories)
    // converting to array
    uniqueCatetories = [...uniqueCatetories]
    //reversing and adding 'all' to the beginning
    uniqueCatetories = ["all", ...uniqueCatetories.reverse()]

    return (
        <div className="tabs">
            {uniqueCatetories.map((item, index) => {
                return (
                    <button key={index} className={index === 0 ? "active" : ""} onClick={e => handleTabClick(e, { item })}>
                        {item}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs
