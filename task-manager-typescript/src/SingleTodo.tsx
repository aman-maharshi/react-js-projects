import { useState, useRef, useEffect } from "react"
import { Todo } from "./model"
import { MdEdit, MdDelete, MdCheck } from "react-icons/md"
import { Draggable } from "react-beautiful-dnd"

interface Props {
    index: number
    item: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ index, item, todos, setTodos }: Props) => {
    const [enableEdit, setEnableEdit] = useState<boolean>(false)
    const [todoText, setTodoText] = useState<string>(item.text)
    const editInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (enableEdit) {
            if (editInputRef.current) {
                editInputRef.current.focus()
            }
        }
    }, [enableEdit])

    const handleDelete = () => {
        setTodos(todos.filter((listItem) => listItem.id !== item.id))
    }

    const toggleCompleted = () => {
        setTodos(
            todos.map((listItem) => {
                if (listItem.id === item.id) {
                    return {
                        ...listItem,
                        completed: !listItem.completed,
                    }
                } else {
                    return listItem
                }
            })
        )
    }

    const handleEdit = () => {
        if (!item.completed) {
            setEnableEdit(!enableEdit)
        }
    }

    const handleEditFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (todoText) {
            setTodos(
                todos.map((listItem) => {
                    if (listItem.id === item.id) {
                        return {
                            ...listItem,
                            text: todoText,
                        }
                    } else {
                        return listItem
                    }
                })
            )
        }
        setEnableEdit(false)
    }

    return (
        <Draggable draggableId={item.id.toString()} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="mb-3 p-2 bg-yellow-200 border-b-2 border-yellow-500 flex justify-between cursor-pointer transition hover:-translate-y-1 hover:shadow-md hover:bg-yellow-300"
                >
                    <div
                        className={
                            item.completed
                                ? "flex-1 truncate line-through"
                                : "flex-1 truncate"
                        }
                    >
                        {enableEdit ? (
                            <form onSubmit={handleEditFormSubmit}>
                                <input
                                    value={todoText}
                                    onChange={(e) =>
                                        setTodoText(e.target.value)
                                    }
                                    ref={editInputRef}
                                    type="text"
                                    className="focus:outline-blue-500"
                                />
                            </form>
                        ) : (
                            item.text
                        )}
                    </div>
                    <div>
                        <button onClick={handleEdit} className="text-xl">
                            <MdEdit />
                        </button>
                        <button onClick={handleDelete} className="text-xl mx-4">
                            <MdDelete />
                        </button>
                        <button onClick={toggleCompleted} className="text-xl">
                            <MdCheck />
                        </button>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default SingleTodo
