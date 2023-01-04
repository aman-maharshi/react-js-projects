import { useState } from "react"

const Row = ({ data }) => {
    const [showFolderContent, setShowFolderContent] = useState(true)

    const [newFileOrFolderRow, setNewFileOrFolderRow] = useState({
        visible: false,
        isFolder: false
    })

    const handleAddNewFileOrFolder = (e, type) => {
        e.stopPropagation()
        setShowFolderContent(true)
        setNewFileOrFolderRow({
            visible: true,
            isFolder: type === "folder" ? true : false
        })
    }

    if (data.isFolder) {
        return (
            <div>
                <div onClick={() => setShowFolderContent(!showFolderContent)} className="p-2 cursor-pointer select-none hover:bg-gray-100 flex items-center justify-between">
                    <div>
                        {showFolderContent ? "📂" : "📁"} {data.name}
                    </div>
                    <div className="flex items-center">
                        <div onClick={e => handleAddNewFileOrFolder(e, "folder")} className="p-1 text-gray-700 mr-2">
                            + 📁
                        </div>
                        <div onClick={e => handleAddNewFileOrFolder(e, "file")} className="p-1 text-gray-700">
                            + 📄
                        </div>
                    </div>
                </div>
                {showFolderContent && (
                    <div className="ml-4 border-l border-gray-200">
                        {newFileOrFolderRow.visible && (
                            <div className="flex items-center">
                                {newFileOrFolderRow.isFolder ? "📁" : "📄"}
                                <input
                                    onBlur={() =>
                                        setNewFileOrFolderRow({
                                            ...newFileOrFolderRow,
                                            visible: false
                                        })
                                    }
                                    type="text"
                                    className="ml-1 px-1"
                                    autoFocus
                                />
                            </div>
                        )}

                        {data.children.map(item => {
                            return <Row key={item.id} data={item} />
                        })}
                    </div>
                )}
            </div>
        )
    } else {
        return <div className="p-2">📄 {data.name}</div>
    }
}

export default Row
