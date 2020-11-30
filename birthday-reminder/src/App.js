import React from "react"
import data from "./data.js"
import Footer from "./Footer"

class App extends React.Component {
    state = {
        listItems: data
    }

    clearAll = () => {
        this.setState({
            listItems: []
        })
    }

    reload = () => {
        window.location.reload()
    }

    render() {
        const listItems = this.state.listItems

        return (
            <>
                <main className="container">
                    <p className="title">{listItems.length} Birthdays Today</p>
                    <div className="list">
                        {listItems.map(item => {
                            return (
                                <div className="person" key={item.id}>
                                    <div className="person__photo">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div>
                                        <p className="person__name">{item.name}</p>
                                        <p className="person__age">{item.age} years</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={this.clearAll} disabled={listItems.length ? false : true}>
                        Clear All
                    </button>
                    {!listItems.length && <button onClick={this.reload}>Reload</button>}
                    <Footer />
                </main>
            </>
        )
    }
}

export default App
