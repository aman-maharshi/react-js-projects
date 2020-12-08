import React, { useState } from "react"

function Tour({ tour, toursData, setToursData }) {
    const [readMore, setReadMore] = useState(true)

    const removeTour = e => {
        e.preventDefault()
        setToursData(toursData.filter(item => item.id !== tour.id))
    }

    const toggleReadMore = e => {
        e.preventDefault()
        setReadMore(!readMore)
    }

    return (
        <div className="tour">
            <div className="tour__image">
                <img src={tour.image} alt={tour.name} />
            </div>
            <div className="tour__details">
                <div className="tour__name-and-price">
                    <p>{tour.name}</p>
                    <span>${tour.price}</span>
                </div>
                {readMore ? (
                    <p className="tour__description">
                        {tour.info.substring(0, 170)}...{" "}
                        <button className="read-more-btn" onClick={toggleReadMore}>
                            Read More
                        </button>
                    </p>
                ) : (
                    <p className="tour__description">
                        {tour.info}{" "}
                        <button className="read-more-btn" onClick={toggleReadMore}>
                            Show Less
                        </button>
                    </p>
                )}

                <button onClick={removeTour} className="tours__button">
                    Not Interested
                </button>
            </div>
        </div>
    )
}

export default Tour
