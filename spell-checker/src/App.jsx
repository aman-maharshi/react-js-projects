import { useState } from "react"

function App() {
    const [textInput, setTextInput] = useState("")
    const corrections = {
        erth: "earth",
        jst: "just",
        the: "The",
        teh: "The"
    }

    function checkSpelling(e) {
        const userInput = e.target.value
        if (e.keyCode === 32) {
            const wordList = userInput.split(" ")
            const correctedWordList = wordList.map(item => {
                if (corrections.hasOwnProperty(item)) {
                    return corrections[item]
                } else {
                    return item
                }
            })
            setTextInput(correctedWordList.join(" "))
        }
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="md:w-3/6 md:mt-20 md:mx-auto mt-10 mx-2 shadow-2xl md:p-8 p-4 rounded-xl bg-white mx-auto">
                <div>
                    <h1 className="text-center font-bold md:text-5xl text-3xl mb-10 font-scramento">Spell Checker</h1>
                    <p>Try entering the following text into the input box</p>
                    <p className="p-4 rounded-lg text-center bg-gray-100 text-gray-500 my-4">
                        The <span className="text-gray-600">erth</span> shakes <span className="text-gray-600">jst</span> enough to remind us.{" "}
                    </p>
                    <p>It will get corrected to the correct spelling</p>
                    {/* prettier-ignore */}
                    <textarea 
                    value={textInput}
                    onChange={e => setTextInput(e.target.value)}
                    onKeyDown={checkSpelling}
                    autoFocus 
                    className="my-4 border border-gray-400 h-20 w-full resize-none p-2 rounded-lg focus:outline-orange-600"
                >
                </textarea>
                </div>
            </div>
            <div className="mt-auto p-4 text-center md:text-2xl text-xl font-scramento">
                Designed and coded by{" "}
                <a className="text-amber-700 hover:text-orange-600" href="https://amanmaharshi.com" target="_blank">
                    Aman Maharshi
                </a>
            </div>
        </div>
    )
}

export default App
