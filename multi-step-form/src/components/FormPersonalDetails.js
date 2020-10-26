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
        const { handleFieldChange, values } = this.props

        return (
            <div className="form-container">
                <h1>Personal Details</h1>
                <div className="form-inputs">
                    <input type="text" placeholder="Enter Country..." onChange={handleFieldChange("country")} defaultValue={values.country} />
                    <input type="text" placeholder="Enter Occupation..." onChange={handleFieldChange("occupation")} defaultValue={values.occupation} />
                    <input type="number" placeholder="Enter Age..." onChange={handleFieldChange("age")} defaultValue={values.age} />
                </div>

                <div className="form-buttons">
                    <button onClick={this.continue}>Continue</button>
                    <button className="back-button" onClick={this.previous}>
                        Back
                    </button>
                </div>
            </div>
        )
    }
}

export default FormPersonalDetails
