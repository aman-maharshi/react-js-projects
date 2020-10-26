import React from "react"

class FormBasicDetails extends React.Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values, handleFieldChange } = this.props
        return (
            <div className="form-container">
                <h1>Basic Details</h1>
                <div className="form-inputs">
                    <input type="text" placeholder="Enter First Name..." onChange={handleFieldChange("firstName")} defaultValue={values.firstName} />
                    <input type="text" placeholder="Enter Last Name..." onChange={handleFieldChange("lastName")} defaultValue={values.lastName} />
                    <input type="email" placeholder="Enter Email..." onChange={handleFieldChange("email")} defaultValue={values.email} />
                </div>
                <div className="form-buttons">
                    <button onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default FormBasicDetails
