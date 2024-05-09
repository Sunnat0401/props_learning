import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './Pages/HomePages/HomePages'
import Service from './Pages/Service/Service'
const App = () => {
  return (
  <Routes>
    <Route path='/' element={<HomePages/>} />
    <Route path='/service' element={<Service/> }/>
  </Routes>

  )
}

export default App