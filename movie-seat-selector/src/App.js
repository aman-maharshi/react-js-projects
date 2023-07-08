import { useState, useEffect } from 'react'
import data from "./data.js"

function App() {
  const [seatsData, setSeatsData] = useState(data)
  const [numberOfSeats, setNumberOfSeats] = useState(1)

  const totalSelectedSeats = seatsData.reduce((accu, current) => current.status === 'occupied' ? accu + 1 : accu, 0)

  const handleSeatClick = (key) => {
    setSeatsData(prev => {
      return prev.map(item => {
        if (item.id >= key && item.id < key + numberOfSeats) {
          return {
            ...item,
            status: 'occupied'
          }
        } else {
          return item
        }
      })
    })
  }

  const clearSelectedSeats = () => {
    setSeatsData(prev => prev.map(item => ({...item, status: 'vacant'})))
  }

  return (
    <>
    <div className='wrapper'>
      <div className='selector'>
        <h1 className='selector__title'>How Many Seats?</h1>
        <div className='selector__input-row'>
          <input 
            type="range" 
            value={numberOfSeats} 
            onChange={e => setNumberOfSeats(Number(e.target.value))} 
            min={1} 
            max={5} 
          />
          <div className='label'>{numberOfSeats}</div>
        </div>
      </div>
      <div className='seats'>
        {seatsData.map(item => {
          const {id, status} = item
          return (
            <div 
              key={id} 
              className={status === "occupied" ? "seat occupied" : "seat"}
              onClick={() => handleSeatClick(id)}
            >
              {id}
            </div>
          )
        })}
      </div>
      <div className="info-row">
        <div>Selected Seats: {totalSelectedSeats}</div>
        <button onClick={clearSelectedSeats}>Clear All</button>
      </div>
    </div>
    <footer>
      Designed and Coded by <a href="https://amanmaharshi.com" target='_blank'>Aman Maharshi</a>
    </footer>
    </>
  )
}

export default App;
