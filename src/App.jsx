import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DetalleRey from './pages/DetalleRey'
import Error404 from './components/Error404'

import Nav from './components/Nav'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/rey/:nombre' element={ <DetalleRey/>} />
          <Route path='/rey/leogivildo' element={<Navigate to={'/rey/leovigildo'} />} />
          <Route path='/*' element={<Error404 />} />
          
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
