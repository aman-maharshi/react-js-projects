import React, {useState} from 'react'

function ResultCard({ item }) {
  const {id, originalLink, shortLink} = item
  const [linkCopied, setLinkCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink)
    setLinkCopied(true)
  }

  return (
  <div className="results-card">
    <div className="results-card__left">
      {originalLink}
    </div>
    <div className="results-card__right">
      <a href={`https://${shortLink}`} target="_blank" className="result">{shortLink}</a>
      <button 
        onClick={handleCopy} 
        style={linkCopied ? {backgroundColor: "#4a416b"} : null}
      >
        {linkCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  </div>
  )
}

export default ResultCard