import { useState, useEffect } from "react"
import List from "./List"

function App() {
    const [message, setMessage] = useState("")
    const [userInput, setUserInput] = useState("")
    const [editItemId, setEditItemId] = useState(null)
    const [shoppingList, setShoppingList] = useState([{ id: 3123, name: "Bread" }, { id: 2234, name: "Milk" }])

    // hiding the message after 1 seconds
    useEffect(() => {
        const timeout = setTimeout(() => {
            setMessage("")
        }, 1000)

        return () => clearTimeout(timeout)
    }, [message])

    const handleSubmit = e => {
        e.preventDefault()

        if (!editItemId && userInput) {
            // new item
            setShoppingList([...shoppingList, { id: Math.floor(Math.random() * 10000), name: userInput }])

            setUserInput("")
            setMessage("Item Added")
        } else if (editItemId && userInput) {
            // editing existing item
            const editableObject = shoppingList.filter(item => item.id === editItemId)[0]
            const list = shoppingList
            const index = list.indexOf(editableObject)
            list.splice(index, 1, { id: editItemId, name: userInput })

            setEditItemId(null)
            setUserInput("")
            setMessage("Item Changed")
        }
    }

    return (
        <>
            <div className="page-content">
                <div className="app">
                    <h3>Grocery List</h3>
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
                        <button type="submit">{editItemId ? "Save" : "Add"}</button>
                        {message && <div className="message">{message}</div>}
                    </form>

                    <List shoppingList={shoppingList} setShoppingList={setShoppingList} setUserInput={setUserInput} setEditItemId={setEditItemId} setMessage={setMessage} />
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
