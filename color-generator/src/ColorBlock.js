import { useState, useEffect } from "react"

const ColorBlock = props => {
    const [isColorCopied, setIsColorCopied] = useState(false)

    const { color, index } = props

    let textColor = index > 4 ? "white" : "black"

    const handleClick = e => {
        const rgbColor = e.currentTarget.style.background
        navigator.clipboard.writeText(rgbColor)
        setIsColorCopied(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsColorCopied(false)
        }, 1000)
    }, [isColorCopied])

    return (
        <div className="color-tile" style={{ background: `#${color.hex}`, color: textColor }} onClick={handleClick}>
            <div>#{color.hex}</div>
            <div>{color.weight} %</div>
            <div className="color-copied">{isColorCopied ? "Copied to clipboard" : ""}</div>
        </div>
    )
}

export default ColorBlock
