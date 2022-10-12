import { useState, useRef } from "react"
import "./index.css"
import { Todo } from "./model"
import InputField from "./InputField"
import SingleTodo from "./SingleTodo"

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
                    completed: false,
                },
            ])

            setTodo("")
            inputRef.current?.blur()
        }
    }

    return (
        <div className="p-4 h-full bg-teal-100">
            <div className="lg:w-3/5 lg:mx-auto">
                <h1 className="text-3xl font-bold mb-4 relative z-10 text-teal-500">
                    Today
                </h1>
                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    handleAdd={handleAdd}
                    inputRef={inputRef}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="p-4 bg-[#b0eee1] shadow-md">
                        <h2 className="font-bold text-lg mb-4 text-[#085a51]">
                            In Progress
                        </h2>

                        {todos.map((item) => {
                            return (
                                <SingleTodo
                                    key={item.id}
                                    item={item}
                                    todos={todos}
                                    setTodos={setTodos}
                                />
                            )
                        })}
                    </div>
                    <div className="p-4 bg-[#b0eee1] shadow-md">
                        <h2 className="font-bold text-lg mb-4 text-[#085a51]">
                            Completed
                        </h2>
                        {todos.map((item) => {
                            return (
                                <SingleTodo
                                    key={item.id}
                                    item={item}
                                    todos={todos}
                                    setTodos={setTodos}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
