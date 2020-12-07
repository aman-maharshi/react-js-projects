import React from "react"

function Tour({ tour }) {
    return (
        <div className="tour">
            <div className="tour__image">
                <img src={tour.image} alt="tour" />
            </div>
            <div className="tour__details">
                <div className="tour__name-and-price">
                    <p>{tour.name}</p>
                    <span>${tour.price}</span>
                </div>
                <p className="tour__description">{tour.info}</p>
                <button className="tours__button">Not Interested</button>
            </div>
        </div>
    )
}

export default Tour
