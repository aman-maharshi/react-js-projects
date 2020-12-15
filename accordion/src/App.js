import React from "react"

import data from "./data"
import Accordion from "./Accordion"

function App() {
    return (
        <section className="main-container">
            <h1>JavaScript Questions</h1>
            {data.map(item => (
                <Accordion key={item.id} question={item.title} answer={item.info} />
            ))}
        </section>
    )
}

export default App
