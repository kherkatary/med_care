
import { Footer, Navbar } from './Components'
import { About, ErrorPage, Home, Login } from './Pages'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
