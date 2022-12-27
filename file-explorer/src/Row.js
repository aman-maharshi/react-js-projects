import { useState } from "react"
import { BsFolder, BsFolderFill } from "react-icons/bs"
import { AiOutlineFileText } from "react-icons/ai"

const Row = ({ name, data }) => {
    // console.log(data)
    const [showFolderContent, setShowFolderContent] = useState(true)

    const handleFolderClick = () => {
        if (data.isFolder) {
            setShowFolderContent(prev => !prev)
        }
    }

    return (
        <>
            <div className="itemRow" onClick={handleFolderClick}>
                {data.isFolder ? <BsFolderFill /> : <AiOutlineFileText />}
                <div>{name}</div>
            </div>

            {showFolderContent && (
                <div className="nested">
                    {data.children &&
                        Object.keys(data.children).map((item, index) => {
                            return <Row key={index} name={item} data={data.children[item]} />
                        })}
                </div>
            )}
        </>
    )
}

export default Row
