import React from "react"
import { Link } from "react-router-dom"

function Cancel() {
    return (
        <div className="md:px-8 p-4">
            <h1 className="md:text-3xl text-xl font-medium">Payment cancelled, Please try again!</h1>
            <Link to="/" className="mt-4 block underline">
                Back to Store
            </Link>
        </div>
    )
}

export default Cancel
