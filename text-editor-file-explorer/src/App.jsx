import { useState } from "react"
import explorerData from "./data"
import Row from "./Row"

function App() {
    const [data, setData] = useState(explorerData)

    return (
        <div className="grid grid-cols-4 h-screen">
            <div className="col-span-1">
                <Row data={data} />
            </div>
            <div className="col-span-3 bg-gray-300"></div>
        </div>
    )
}

export default App
