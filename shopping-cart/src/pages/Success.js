import React from "react"
import { Link } from "react-router-dom"

function Success() {
    return (
        <div className="md:px-8 p-4">
            <h1 className="md:text-3xl text-xl font-medium">Thank you for your purchase!</h1>
            <Link to="/" className="mt-4 block underline">
                Back to Store
            </Link>
        </div>
    )
}

export default Success
