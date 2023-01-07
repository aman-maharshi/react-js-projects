import { getDefaultNormalizer } from "@testing-library/react"
import { useState } from "react"
import jsonData from "./data"
import Row from "./Row"

const App = () => {
    const [data, setData] = useState(jsonData)

    // const printTreeDataDfs = tree => {
    //     console.log(tree.id)

    //     if (tree.hasOwnProperty("children")) {
    //         Object.keys(tree.children).map(item => {
    //             return printTreeDataDfs(tree.children[item])
    //         })
    //     }
    // }

    // printTreeDataDfs(data.root)

    return (
        <div className="container">
            <div className="sidebar">
                {Object.keys(data).map((item, index) => {
                    return <Row key={index} name={item} data={data[item]} />
                })}
            </div>
            <div className="editor">
                <h2>Features</h2>
                <p>Create nested files and folders</p>
                <p>Show and hide folder content by clicking on the folder name</p>

                {/* <h2>Issues</h2>
                <p>Save the nested changes to the global state</p> */}
            </div>
        </div>
    )
}

export default App
