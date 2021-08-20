import { useState } from "react"
import { GrEdit, GrTrash } from "react-icons/gr"

function App() {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("message")

    return (
        <>
            <div className="page-content">
                <div className="app">
                    <h3>Shopping List</h3>
                    <form className="form">
                        <input type="text" />
                        <button type="submit">Add</button>
                        {showMessage && <div className="message">{message}</div>}
                    </form>

                    <div>
                        <div className="todo-item">
                            <div className="todo-text">Bread</div>
                            <div>
                                <GrEdit className="edit-btn" />
                                <GrTrash className="trash-btn" />
                            </div>
                        </div>
                        <div className="todo-item">
                            <div className="todo-text">Milk</div>
                            <div>
                                <GrEdit className="edit-btn" />
                                <GrTrash className="trash-btn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>
                    Designed and Coded by <a href="https://www.linkedin.com/in/amanmaharshi/">Aman Maharshi</a>
                </p>
            </footer>
        </>
    )
}

export default App
