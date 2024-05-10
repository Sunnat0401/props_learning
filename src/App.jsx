import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './Pages/HomePages/HomePages'
import Service from './Pages/Service/Service'
import About from './Pages/About/About'
const App = () => {
  return (
  <Routes>
    <Route path='/' element={<HomePages/>} />
    <Route path='/service' element={<Service/> }/>
    <Route path='/about' element={<About/> }/>
  </Routes>

  )
}

export default App