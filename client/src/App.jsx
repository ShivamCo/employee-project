import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Authentication from './pages/Authentication'
import Dashboard from './pages/Dashboard'
import Searchpage from './pages/Searchpage'
import RegisterPage from './pages/Register'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/search' element={<Searchpage/>} />
      <Route path='/login' element={<Authentication/>} />
      <Route path='/register' element={<RegisterPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
