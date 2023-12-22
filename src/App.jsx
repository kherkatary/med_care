
import { Footer, Navbar } from './Components'
import { About, Home, Login } from './Pages'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about-us' element={<About/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
