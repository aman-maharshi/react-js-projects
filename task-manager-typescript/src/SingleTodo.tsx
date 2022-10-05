import React from "react"
import { Todo } from "./model"
import { MdEdit, MdDelete, MdCheck } from "react-icons/md"

interface Props {
    item: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ item, todos, setTodos }: Props) => {
    return (
        <div className="mb-2 p-2 bg-yellow-200 border-b-2 border-yellow-500 flex justify-between">
            <div className="flex-1 truncate">{item.text}</div>
            <div>
                <button className="text-xl">
                    <MdEdit />
                </button>
                <button className="text-xl mx-4">
                    <MdDelete />
                </button>
                <button className="text-xl">
                    <MdCheck />
                </button>
            </div>
        </div>
    )
}

export default SingleTodo
