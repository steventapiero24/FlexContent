import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Video from './pages/Video.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
