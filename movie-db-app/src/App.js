import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import SingleMovie from "./pages/SingleMovie"

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/movie/:movieId" element={<SingleMovie />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
