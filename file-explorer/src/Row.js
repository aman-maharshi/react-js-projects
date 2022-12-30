import { useState, useEffect, useRef } from "react"
import { BsFolder, BsFolderFill } from "react-icons/bs"
import { AiOutlineFileText, AiFillFileAdd } from "react-icons/ai"

const Row = ({ name, data }) => {
    const [showFolderContent, setShowFolderContent] = useState(true)
    const [rowData, setRowData] = useState(data)
    const [showAddNewFile, setShowAddNewFile] = useState(false)
    const [newFileName, setNewFileName] = useState("")
    const newFileNameRef = useRef(null)
    // console.log(rowData)

    useEffect(() => {
        if (showAddNewFile) {
            if (newFileNameRef.current) {
                newFileNameRef.current.focus()
            }
        }
    }, [showAddNewFile])

    const handleFolderClick = () => {
        if (rowData.isFolder) {
            setShowFolderContent(prev => !prev)
        }
    }

    const toggleAddFile = () => {
        setShowAddNewFile(prev => !prev)
    }

    const handleAddNewFile = () => {
        if (newFileName) {
            setRowData({
                ...rowData,
                children: {
                    ...rowData.children,
                    [newFileName]: {
                        id: Date.now(),
                        isFolder: false
                    }
                }
            })
        }
        setShowAddNewFile(false)
        setNewFileName("")
    }

    // HANDLING OUTSIDE CLICK
    const newFileRowRef = useRef()

    // const handleClickOutside = e => {
    //     if (!newFileRowRef.current.contains(e.target)) {
    //         if (!newFileName) {
    //             setShowAddNewFile(false)
    //         }
    //     }
    // }

    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside)
    //     return () => document.removeEventListener("mousedown", handleClickOutside)
    // })

    return (
        <>
            <div className="itemRow">
                <div onClick={handleFolderClick} className="itemRowLeft">
                    {rowData.isFolder ? <BsFolderFill /> : <AiOutlineFileText />}
                    <div>{name}</div>
                </div>
                <div className="itemRowRight">
                    {rowData.isFolder && (
                        <div onClick={toggleAddFile} className="addFile">
                            <AiFillFileAdd />
                        </div>
                    )}
                </div>
            </div>

            {showFolderContent && (
                <div className="nested">
                    {/* NEW ITEM */}
                    {showAddNewFile && (
                        <div className="newFileRow" ref={newFileRowRef}>
                            <AiOutlineFileText />
                            <form onSubmit={handleAddNewFile}>
                                {/* prettier-ignore */}
                                <input 
                                    type="text" 
                                    value={newFileName} 
                                    ref={newFileNameRef} 
                                    onChange={e => setNewFileName(e.target.value)} 
                                />
                            </form>
                        </div>
                    )}
                    {/* EXISTING ITEMS*/}
                    {rowData.children &&
                        Object.keys(rowData.children).map((item, index) => {
                            return <Row key={index} name={item} data={rowData.children[item]} />
                        })}
                </div>
            )}
        </>
    )
}

export default Row
