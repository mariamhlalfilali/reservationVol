import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Reserver from './routes/Reserver'
import Contact from './routes/Contact'
import SignUp from './routes/SignUp'
import Psearch from './routes/Psearch'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reserver" element={<Reserver/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/Psearch" element={<Psearch/>}/>





      </Routes>
     
      

      
    </div>
  )
}

export default App
