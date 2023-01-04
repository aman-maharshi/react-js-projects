import { useState } from "react"

const Row = ({ data }) => {
    const [showFolderContent, setShowFolderContent] = useState(true)

    if (data.isFolder) {
        return (
            <div>
                <div onClick={() => setShowFolderContent(!showFolderContent)} className="p-2 cursor-pointer select-none hover:bg-gray-100">
                    {showFolderContent ? "📂" : "📁"} {data.name}
                </div>
                {showFolderContent && (
                    <div className="ml-4 border-l border-gray-200">
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
