import React from "react"
import { BsFolder, BsFolderFill } from "react-icons/bs"
import { AiOutlineFileText } from "react-icons/ai"

const Row = ({ name, data }) => {
    // console.log(data)

    return (
        <>
            <div className="itemRow">
                {data.isFolder ? <BsFolderFill /> : <AiOutlineFileText />}
                <div>{name}</div>
            </div>

            <div className="nested">
                {data.children &&
                    Object.keys(data.children).map((item, index) => {
                        return <Row key={index} name={item} data={data.children[item]} />
                    })}
            </div>
        </>
    )
}

export default Row
