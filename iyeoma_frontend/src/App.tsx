import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Login, Savings } from './Routes'
// require('typeface-nunito');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
