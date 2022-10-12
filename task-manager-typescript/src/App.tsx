import { useState, useRef } from "react"
import "./index.css"
import { Todo } from "./model"
import InputField from "./InputField"
import SingleTodo from "./SingleTodo"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([])
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([])
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

    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result
        if (!destination) return
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return

        let add,
            active = todos,
            complete = completedTodos

        if (source.droppableId === "TodoInProgress") {
            add = active[source.index]
            active.splice(source.index, 1) // remove item from source index
        } else {
            add = complete[source.index]
            complete.splice(source.index, 1) // remove item from source index
        }

        if (destination.droppableId === "TodoInProgress") {
            active.splice(destination.index, 0, add) // add item at destination index
        } else {
            complete.splice(destination.index, 0, add) // add item at destination index
        }

        setCompletedTodos(complete)
        setTodos(active)
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
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
                        <Droppable droppableId="TodoInProgress">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`p-4 shadow-md ${
                                        snapshot.isDraggingOver
                                            ? "bg-[#8dc9bc]"
                                            : "bg-[#b0eee1]"
                                    }`}
                                >
                                    <h2 className="font-bold text-lg mb-4 text-[#085a51]">
                                        In Progress
                                    </h2>
                                    {todos.map((item, index) => {
                                        return (
                                            <SingleTodo
                                                index={index}
                                                key={item.id}
                                                item={item}
                                                todos={todos}
                                                setTodos={setTodos}
                                            />
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>

                        <Droppable droppableId="TodoCompleted">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`p-4 shadow-md ${
                                        snapshot.isDraggingOver
                                            ? "bg-[#8dc9bc]"
                                            : "bg-[#b0eee1]"
                                    }`}
                                >
                                    <h2 className="font-bold text-lg mb-4 text-[#085a51]">
                                        Completed
                                    </h2>
                                    {completedTodos.map((item, index) => {
                                        return (
                                            <SingleTodo
                                                index={index}
                                                key={item.id}
                                                item={item}
                                                todos={completedTodos}
                                                setTodos={setCompletedTodos}
                                            />
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
            </div>
        </DragDropContext>
    )
}

export default App
