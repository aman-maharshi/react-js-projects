import { useState } from "react"
import InputField from "./InputField"
import "./index.css"

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("")

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4 relative z-10 text-pink-500">Today</h1>
            <InputField />
        </div>
    )
}

export default App
