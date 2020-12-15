import React, { useState } from "react"

function Accordion({ question, answer }) {
    const [answerVisible, setAnswerVisible] = useState(false)

    const toggleAccordion = () => {
        setAnswerVisible(!answerVisible)
    }

    return (
        <div className="accordion">
            <div className="question">
                {question}
                <button className="toggle" onClick={toggleAccordion}>
                    {answerVisible ? "-" : "+"}
                </button>
            </div>
            <div className={"answer" + (answerVisible ? " show-answer" : "")}>{answer}</div>
        </div>
    )
}

export default Accordion
