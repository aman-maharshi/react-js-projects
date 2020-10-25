import React from "react"

class FormPersonalDetails extends React.Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    previous = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        return (
            <div className="form-container">
                <h1>Personal Details</h1>
                <div className="form-inputs">
                    <input type="text" placeholder="Enter Country..." />
                    <input type="text" placeholder="Enter Occupation..." />
                    <input type="text" placeholder="Enter Hobbies..." />
                </div>

                <div className="form-buttons">
                    <button onClick={this.continue}>Continue</button>
                    <button onClick={this.previous}>Back</button>
                </div>
            </div>
        )
    }
}

export default FormPersonalDetails
