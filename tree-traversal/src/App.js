import React, { useState } from "react"
import Row from "./Row"
import treeData from "./data"

function App() {
    const [data, setData] = useState(treeData)
    const [dfsList, setDfsList] = useState([])

    function deleteNode(tree, id) {
        //BASE CASE

        // This just makes the empty object, instead we've to delete the object inside children
        if (tree.id === id) {
            delete tree.children
            delete tree.id
            delete tree.name
        }

        // RECURSIVE CASE
        if (tree.children) {
            tree.children.forEach(item => {
                deleteNode(item, id)
            })
        }

        return tree
    }

    const handleDelete = id => {
        const updatedTree = deleteNode(data, id)
        console.log(updatedTree)
        setData(updatedTree)
    }

    return (
        <div className="grid grid-cols-6 h-screen">
            <div className="col-span-2 p-4">
                <Row rowData={data} handleDelete={handleDelete} />
            </div>
            <div className="col-span-4 p-4 border-l border-gray-200 bg-gray-50"></div>
        </div>
    )
}

export default App
