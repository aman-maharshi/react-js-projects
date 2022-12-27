import { BsFolder } from "react-icons/bs"
import { AiOutlineFileText } from "react-icons/ai"

const App = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <BsFolder />
                <AiOutlineFileText />
            </div>
            <div className="editor"></div>
        </div>
    )
}

export default App
