import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Video from './pages/Video.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="/video" element={<Video />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
