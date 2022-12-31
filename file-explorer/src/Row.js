import { useState, useEffect, useRef } from "react"
import { BsFolder, BsFolderFill } from "react-icons/bs"
import { AiOutlineFileText } from "react-icons/ai"
import { RiFolderAddFill, RiFileAddLine } from "react-icons/ri"

const Row = ({ name, data }) => {
    const [showFolderContent, setShowFolderContent] = useState(true)
    const [rowData, setRowData] = useState(data)

    const [showAddNewFile, setShowAddNewFile] = useState(false)
    const [newFileName, setNewFileName] = useState("")
    const newFileNameRef = useRef(null)

    const [showAddNewFolder, setShowAddNewFolder] = useState(false)
    const [newFolderName, setNewFolderName] = useState("")
    const newFolderNameRef = useRef(null)
    // console.log(rowData)

    useEffect(() => {
        if (showAddNewFile) {
            if (newFileNameRef.current) {
                newFileNameRef.current.focus()
            }
        }
    }, [showAddNewFile])

    useEffect(() => {
        if (showAddNewFolder) {
            if (newFolderNameRef.current) {
                newFolderNameRef.current.focus()
            }
        }
    }, [showAddNewFolder])

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

    const toggleAddFolder = () => {
        setShowAddNewFolder(prev => !prev)
    }

    const handleAddNewFolder = () => {
        if (newFolderName) {
            setRowData({
                ...rowData,
                children: {
                    ...rowData.children,
                    [newFolderName]: {
                        id: Date.now(),
                        isFolder: true,
                        children: {}
                    }
                }
            })
        }
        setShowAddNewFolder(false)
        setNewFolderName("")
    }

    // HANDLING OUTSIDE CLICK - CLOSE ADD FILE
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
                        <>
                            <div onClick={toggleAddFolder} className="addFile">
                                <RiFolderAddFill />
                            </div>
                            <div onClick={toggleAddFile} className="addFile">
                                <RiFileAddLine />
                            </div>
                        </>
                    )}
                </div>
            </div>

            {showFolderContent && (
                <div className="nested">
                    {/* NEW FOLDER */}
                    {showAddNewFolder && (
                        <div className="newFileRow">
                            <BsFolderFill />
                            <form onSubmit={handleAddNewFolder}>
                                {/* prettier-ignore */}
                                <input 
                                    type="text" 
                                    value={newFolderName} 
                                    ref={newFolderNameRef} 
                                    onChange={e => setNewFolderName(e.target.value)} 
                                />
                            </form>
                        </div>
                    )}

                    {/* NEW FILE */}
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

                    {/* EXISTING ITEMS */}
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
