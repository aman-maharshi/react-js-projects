import { useState, useEffect } from "react"

const App = () => {
    const [query, setQuery] = useState("")
    const [pageNumber, setPageNumber] = useState(1)

    return (
        <section>
            <input type="text" placeholder="Search" />
            <div>
                <h3>Lorem, ipsum dolor.</h3>
                <h3>Lorem, ipsum dolor.</h3>
                <h3>Lorem, ipsum dolor.</h3>
                <h3>Lorem, ipsum dolor.</h3>
                <h3>Lorem, ipsum dolor.</h3>
                <h3>Lorem, ipsum dolor.</h3>
                <h3>Lorem, ipsum dolor.</h3>
                <h3>Lorem, ipsum dolor.</h3>

                <h3>Loading...</h3>
                <h3>Error</h3>
            </div>
        </section>
    )
}

export default App
