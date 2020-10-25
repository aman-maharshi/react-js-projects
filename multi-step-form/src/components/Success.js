import React from "react"

class Success extends React.Component {
    previous = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        return (
            <div className="form-container">
                <h1>Success</h1>

                <div className="form-buttons">
                    <button onClick={this.previous}>Back</button>
                </div>
            </div>
        )
    }
}

export default Success
