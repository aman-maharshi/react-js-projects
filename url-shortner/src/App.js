import React from 'react'

function App() {
  return (
    <>
      <div className="wrapper">
        <h1>URL Shortner</h1>
        <form className="input-card">
          <input type="text" placeholder="Shorten a link here..." />
          <button type="submit">Shorten It!</button>
        </form>

        <div className="results">
          <div className="results-card">
            <div className="results-card__left">
              https://www.loremipsum.com
            </div>
            <div className="results-card__right">
              <div className="result">https://lo.rem/one</div>
              <button>Copy</button>
            </div>
          </div>
        </div>
      </div>
      <footer>Coded by <a href="https://amanmaharshi.com" target="_blank">Aman Maharshi</a></footer>
    </>
  )
}

export default App