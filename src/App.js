import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Hompage } from './Pages/Hompage'
import './App.scss'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hompage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
