import React from "react"

function CollectionItem({ items }) {
    return (
        <>
            {items.map(item => {
                return (
                    <div key={item.id} className="item-wrapper">
                        <img src={item.img} alt={item.title} />
                        <div className="item-details">
                            <span>{item.title}</span>
                            <span>&#8377; {item.price}</span>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CollectionItem
