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
            <div className="md:col-span-1 col-span-4">
                <Row data={data} handleInsertTreeNode={handleInsertTreeNode} />
            </div>
            <div className="md:col-span-3 col-span-4 bg-gray-300 md:px-8 p-4 flex flex-col">
                <div>
                    <h3 className="text-3xl font-bold text-slate-600 mb-6">Features</h3>
                    <p className="my-4 text-slate-500">
                        Create the file explorer tree based on the file{" "}
                        <a href="https://github.com/aman-maharshi/react-js-projects/blob/master/text-editor-file-explorer/src/data.js" target="_blank" rel="noreferrer" className="underline text-slate-700">
                            data.js
                        </a>
                    </p>
                    <p className="my-4 text-slate-500">Show and hide folder content on click</p>
                    <p className="my-4 text-slate-500">Create nested files and folders</p>
                </div>
                <div className="mt-auto p-4 text-center text-gray-500">
                    Designed and coded by{" "}
                    <a className="text-gray-700 hover:text-gray-600" href="https://amanmaharshi.com" target="_blank" rel="noreferrer">
                        Aman Maharshi
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App
