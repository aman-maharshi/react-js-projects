import React from "react"

function CollectionItem({ items }) {
    return (
        <>
            {items.map(item => {
                return (
                    <div key={item.id}>
                        <img src={item.img} alt={item.title} />
                    </div>
                )
            })}
        </>
    )
}

export default CollectionItem
