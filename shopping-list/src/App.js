import { useState } from "react"
import List from "./List"

function App() {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("message")
    const [userInput, setUserInput] = useState("")
    const [editItemId, setEditItemId] = useState(null)
    const [shoppingList, setShoppingList] = useState([{ id: 3123, name: "Bread" }, { id: 2234, name: "Milk" }])

    const handleSubmit = e => {
        e.preventDefault()

        if (!editItemId && userInput) {
            // new item
            setShoppingList([...shoppingList, { id: Math.floor(Math.random() * 10000), name: userInput }])
            setUserInput("")
        } else if (editItemId && userInput) {
            // editing existing item
            const editableObject = shoppingList.filter(item => item.id === editItemId)[0]
            const list = shoppingList
            const index = list.indexOf(editableObject)
            list.splice(index, 1, { id: editItemId, name: userInput })

            setEditItemId(null)
            setUserInput("")
        }
    }

    return (
        <>
            <div className="page-content">
                <div className="app">
                    <h3>Shopping List</h3>
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
                        <button type="submit">{editItemId ? "Save" : "Add"}</button>
                        {showMessage && <div className="message">{message}</div>}
                    </form>

                    <List shoppingList={shoppingList} setShoppingList={setShoppingList} setUserInput={setUserInput} setEditItemId={setEditItemId} />
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
