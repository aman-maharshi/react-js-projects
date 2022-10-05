import { useRef } from "react"
interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
    inputRef: React.RefObject<HTMLInputElement>
}

const InputField = ({ todo, setTodo, handleAdd, inputRef }: Props) => {
    return (
        <form onSubmit={handleAdd} className="w-full relative mb-4">
            <input ref={inputRef} value={todo} onChange={e => setTodo(e.target.value)} type="text" className="w-full bg-white p-2 pr-24 custom-input-focus" />
            <button type="submit" className="absolute font-bold text-white bg-teal-500 right-0 top-0 z-10 text-center p-2 w-20">
                Add
            </button>
        </form>
    )
}

export default InputField
