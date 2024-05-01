import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Routes,Route}from 'react-router-dom'
import MyNavbar from './navBar'
import Home from './Home'
import Contact from './contact'
function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<MyNavbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/contact' element={<Contact />} />
</Routes>
</div>
  )
}

export default App
