import { GrEdit, GrTrash } from "react-icons/gr"

const List = ({ shoppingList, setShoppingList, setUserInput, setEditItemId }) => {
    const handleDelete = deleteId => {
        const remainingItems = shoppingList.filter(item => item.id !== deleteId)
        setShoppingList(remainingItems)
    }

    const handleEdit = editId => {
        const itemDetails = shoppingList.filter(item => item.id === editId)[0]
        setUserInput(itemDetails.name)
        setEditItemId(itemDetails.id)
    }

    return (
        <>
            {shoppingList.map(item => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div className="todo-text">{item.name}</div>
                        <div>
                            <GrEdit className="edit-btn" onClick={() => handleEdit(item.id)} />
                            <GrTrash className="trash-btn" onClick={() => handleDelete(item.id)} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default List
