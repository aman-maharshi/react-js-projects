import React from "react"

class Confirm extends React.Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    previous = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const values = this.props.values
        return (
            <div className="form-container">
                <h1>Confirm</h1>
                <div className="confirm-container">
                    <div className="form-inputs">
                        <p>
                            <strong>First Name</strong> {values.firstName}
                        </p>
                        <p>
                            <strong>Email</strong> {values.email}
                        </p>
                        <p>
                            <strong>Occupation</strong> {values.occupation}
                        </p>
                        <p>
                            <strong>Country</strong> {values.country}
                        </p>
                    </div>
                </div>

                <div className="form-buttons">
                    <button onClick={this.continue}>Confirm</button>
                    <button className="back-button" onClick={this.previous}>
                        Back
                    </button>
                </div>
            </div>
        )
    }
}

export default Confirm
