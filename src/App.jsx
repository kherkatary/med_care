
import { Footer, Navbar ,Testimonial} from './Components'
import { Home, Login } from './Pages'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Testimonial/>
      <Footer />
    </>
  )
}

export default App
