const InputField = () => {
    return (
        <form className="w-80 border relative">
            <input type="text" className="w-full border p-2 w-60 custom-input-focus pr-24" />
            <button type="submit" className="absolute bg-white right-0 top-0 z-10 text-center p-2 w-20 border border-solid">
                Add
            </button>
        </form>
    )
}

export default InputField
