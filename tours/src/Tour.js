import React from "react"

function Tour({ tour, toursData, setToursData }) {
    const removeTour = e => {
        e.preventDefault()
        setToursData(toursData.filter(item => item.id !== tour.id))
    }

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
                <button onClick={removeTour} className="tours__button">
                    Not Interested
                </button>
            </div>
        </div>
    )
}

export default Tour
