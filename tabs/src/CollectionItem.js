import React from "react"
import { motion } from "framer-motion"

function CollectionItem({ items }) {
    return (
        <>
            {items.map((item) => {
                return (
                    <motion.div
                        layout
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        key={item.id}
                        className="item-wrapper"
                    >
                        <img src={item.img} alt={item.title} />
                        <div className="item-details">
                            <span>{item.title}</span>
                            <span>&#8377; {item.price}</span>
                        </div>
                    </motion.div>
                )
            })}
        </>
    )
}

export default CollectionItem
