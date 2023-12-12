
import { Footer, Navbar } from './Components'
import { Home, Login } from './Pages'
import { Route, Routes } from 'react-router-dom'
import Carousel from './Components/Carousel/Carousel'

function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
