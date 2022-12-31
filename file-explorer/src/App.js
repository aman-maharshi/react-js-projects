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
                <p>Create nested folders</p>
                <p>Create nested files inside a folder</p>
                <p>Show and Hide folder content by clicking on the folder name</p>

                {/* <h2>Issues</h2>
                <p>Save the nested changes to the global state</p> */}
            </div>
        </div>
    )
}

export default App
