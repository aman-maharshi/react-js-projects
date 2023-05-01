import React, {useState, useEffect} from 'react'
import ResultCard from "./ResultCard"

function App() {
  const [inputUrl, setInputUrl] = useState("")
  const [results, setResults] = useState([])
  const [error, setError] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (inputUrl) {
      try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
        const data = await response.json()
        console.log(data)
        if (data.ok) {
          setError(false)
          setResults(prev => [...prev, 
            {
              id: Date.now(),
              originalLink: data.result.original_link,
              shortLink: data.result.short_link
            }
          ])
        } else {
          setError(true)
        }
      } catch (error) {
        console.log(error)
      }
      setInputUrl("")
    } else {
      setError(true)
    }
  }
  
  return (
    <>
      <div className="wrapper">
        <h1>URL Shortner</h1>
        <form onSubmit={handleFormSubmit} className="input-card">
          <input 
            value={inputUrl} 
            onChange={e => setInputUrl(e.target.value)} 
            type="text" 
            placeholder="Shorten a link here..." 
          />
          <button type="submit">Shorten It!</button>
          {error && <span className="error">Enter a valid URL</span>}
        </form>

        <div className="results">
          {results.map(item => <ResultCard key={item.id} item={item} />)}
        </div>
      </div>
      <footer>Coded by <a href="https://amanmaharshi.com" target="_blank">Aman Maharshi</a></footer>
    </>
  )
}

export default App