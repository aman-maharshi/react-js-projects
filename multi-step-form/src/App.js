import React from "react"
import UserForm from "./components/UserForm"

class App extends React.Component {
    render() {
        return (
            <div className="appWrapper">
                <UserForm />
                <div className="footer">
                    Designed and coded by{" "}
                    <a href="https://amanmaharshi.com" target="_blank" rel="noreferrer">
                        Aman Maharshi
                    </a>
                </div>
            </div>
        )
    }
}

export default App
