import { useState } from "react"
import explorerData from "./data"
import Row from "./Row"
import useTraverseTree from "./useTraverseTree"

function App() {
    const [data, setData] = useState(explorerData)
    const { insertNode } = useTraverseTree()

    const handleInsertTreeNode = (folderId, itemName, isFolder) => {
        const updatedTree = insertNode(data, folderId, itemName, isFolder)
        setData(updatedTree)
    }

    return (
        <div className="grid grid-cols-4 h-screen">
            <div className="col-span-1">
                <Row data={data} handleInsertTreeNode={handleInsertTreeNode} />
            </div>
            <div className="col-span-3 bg-gray-300"></div>
        </div>
    )
}

export default App
