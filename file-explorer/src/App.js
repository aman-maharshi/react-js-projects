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
            <div className="editor"></div>
        </div>
    )
}

export default App
