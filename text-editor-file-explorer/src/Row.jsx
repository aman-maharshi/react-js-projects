import { useState } from "react"

const Row = ({ data }) => {
    const [showFolderContent, setShowFolderContent] = useState(true)

    if (data.isFolder) {
        return (
            <div>
                <div className="p-2 cursor-pointer hover:bg-gray-100">📁 {data.name}</div>
                {showFolderContent && (
                    <div className="ml-4">
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
