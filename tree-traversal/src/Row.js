import React, { useState } from "react"

function Row({ rowData, handleDelete }) {
    const [showChildren, setShowChildren] = useState(Boolean(rowData.children))

    const handleDeleteButtonClick = e => {
        e.stopPropagation()
        handleDelete(rowData.id)
        setShowChildren(false)
    }

    if (!rowData.id) return null

    return (
        <div>
            <div onClick={() => setShowChildren(!showChildren)} className="p-2 flex items-center justify-between cursor-pointer select-none border-l border-gray-200">
                <div>
                    {showChildren ? "⬇" : "➡"} {rowData.name}
                </div>

                {rowData.id !== 1 && (
                    <div className="pointer" onClick={handleDeleteButtonClick}>
                        ❎
                    </div>
                )}
            </div>
            {showChildren && rowData.children && (
                <div className="ml-6">
                    {rowData.children.map(item => (
                        <Row key={item.id} rowData={item} handleDelete={handleDelete} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Row
