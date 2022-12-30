import { useState } from "react"
import jsonData from "./data"
import Row from "./Row"

const App = () => {
    const [data, setData] = useState(jsonData)

    // console.log(data)

    return (
        <div className="container">
            <div className="sidebar">
                {Object.keys(data).map((item, index) => {
                    return <Row key={index} name={item} data={data[item]} />
                })}
            </div>
            <div className="editor">
                <h2>Features</h2>
                <p>Show and Hide folder content by clicking on the folder name</p>
                <p>Create a new file inside a folder</p>
            </div>
        </div>
    )
}

export default App
