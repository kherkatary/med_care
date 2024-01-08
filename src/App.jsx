import { Footer, Navbar } from './Components'
import { About, ErrorPage, Home, Login, News, Contact, Teams, Register, Service } from './Pages/index'
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route exact path='/login' element={<Login />} />
        {/* <Route path='/pages' element={<Login/>}/> */}
        {/* <Route path='/aboutus' element={<Login/>}/> */}
        {/* <Route path='/services' element={<Login/>}/> */}
        <Route exact path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />

        <Route path='*' element={<ErrorPage />} />
        <Route path='/services' element={<Service />} />
        <Route path='/teams' element={<Teams />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
