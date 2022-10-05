import { useState, useRef } from "react"
import InputField from "./InputField"
import "./index.css"
import { Todo } from "./model"

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault()

        if (todo) {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: todo,
                    completed: false
                }
            ])

            setTodo("")
            inputRef.current?.blur()
        }
    }

    return (
        <div className="p-4 h-full bg-teal-100">
            <div className="lg:w-3/5 lg:mx-auto">
                <h1 className="text-3xl font-bold mb-4 relative z-10 text-teal-500">Today</h1>
                <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} inputRef={inputRef} />

                {todos.map(item => {
                    return (
                        <div key={item.id} className="mb-2 p-2 bg-yellow-200 border-b-2 border-yellow-500">
                            {item.text}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App
