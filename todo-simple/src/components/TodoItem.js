import React from "react"
import "../index.css"

function TodoItem({ todo, toggleTodo }) {
    function handleChange() {
        toggleTodo(todo.id)
    }

    return (
        <div className="todoItem">
            <input type="checkbox" onChange={handleChange} checked={todo.complete} />
            {todo.task}
        </div>
    )
}

export default TodoItem
