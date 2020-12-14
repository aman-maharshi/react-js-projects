import React, { useState } from "react"

function App() {
    const [answerVisible, setAnswerVisible] = useState(false)

    const toggleAccordion = () => {
        setAnswerVisible(!answerVisible)
    }

    return (
        <section className="main-container">
            <div className="accordion">
                <div className="question">
                    Lorem ipsum dolor sit amet?{" "}
                    <span className="toggle" onClick={toggleAccordion}>
                        {answerVisible ? "-" : "+"}
                    </span>
                </div>
                <div className={"answer" + (answerVisible ? " show-answer" : "")}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, placeat ex. Nesciunt nulla doloribus architecto, minima reprehenderit ad soluta sapiente quaerat ea aperiam corrupti accusamus dignissimos velit laborum quasi error?</div>
            </div>
        </section>
    )
}

export default App
