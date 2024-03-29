import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from '@pages/Home'
import TestPage from '@pages/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/test" Component={TestPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
