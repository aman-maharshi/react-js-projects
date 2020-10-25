import React from "react"

import FormBasicDetails from "./FormBasicDetails"
import FormPersonalDetails from "./FormPersonalDetails"
import Confirm from "./Confirm"

class UserForm extends React.Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        occupation: "",
        hobbies: ""
    }

    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    // Go back to the previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleFieldChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }
    render() {
        const { step, firstName, lastName, email, country, occupation, hobbies } = this.state
        const values = { step, firstName, lastName, email, country, occupation, hobbies }

        switch (step) {
            case 1:
                return <FormBasicDetails nextStep={this.nextStep} handleFieldChange={this.handleFieldChange} values={values} />
            case 2:
                return <FormPersonalDetails nextStep={this.nextStep} prevStep={this.prevStep} handleFieldChange={this.handleFieldChange} values={values} />
            case 3:
                return <Confirm prevStep={this.prevStep} />
            default:
                return <h1>An Error has occured</h1>
        }
    }
}

export default UserForm
