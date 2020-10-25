import React from "react"

class FormBasicDetails extends React.Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        return (
            <div className="form-container">
                <h1>Basic Details</h1>
                <div className="form-inputs">
                    <input type="text" placeholder="Enter First Name..." />
                    <input type="text" placeholder="Enter Last Name..." />
                    <input type="email" placeholder="Enter Email..." />
                </div>

                <div className="form-buttons">
                    <button onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default FormBasicDetails
