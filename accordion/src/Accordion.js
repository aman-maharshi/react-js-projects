import React, { useState, useEffect } from "react"

function Accordion({ question, answer }) {
    const [answerVisible, setAnswerVisible] = useState(false)
    const [answerElement, setAnswerElement] = useState(null)

    const toggleAccordion = e => {
        setAnswerVisible(!answerVisible)
        setAnswerElement(e.target.parentElement.nextElementSibling)
    }

    useEffect(() => {
        if (answerVisible) {
            const height = answerElement.scrollHeight
            answerElement.style.maxHeight = height + "px"
        } else {
            if (answerElement) {
                answerElement.style.maxHeight = 0
            }
        }
    }, [answerVisible, answerElement])

    return (
        <div className="accordion">
            <div className="question">
                {question}
                <button className="toggle" onClick={toggleAccordion}>
                    {answerVisible ? "-" : "+"}
                </button>
            </div>
            <div className={"answer" + (answerVisible ? " show-answer" : "")}>
                <div className="answer__inner">{answer}</div>
            </div>
        </div>
    )
}

export default Accordion
