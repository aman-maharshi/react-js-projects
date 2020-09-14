import React from "react"
import TodoItem from "./TodoItem"

function TodoList({ todo, toggleTodo }) {
    return todo.map(item => {
        return <TodoItem key={item.id} todo={item} toggleTodo={toggleTodo} />
    })
}

export default TodoList
