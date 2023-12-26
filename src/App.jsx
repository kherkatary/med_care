
import { Footer, Navbar } from './Components'
import { About, ErrorPage, Home, Login, News, Contact} from './Pages/index'
import { Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>
        <Route exact path='/login' element={<Login />} />
          {/* <Route path='/pages' element={<Login/>}/> */}
          {/* <Route path='/aboutus' element={<Login/>}/> */}
          {/* <Route path='/services' element={<Login/>}/> */}
          <Route exact path='/news' element={<News />} />
          <Route path='/contact' element={<Contact/>}/>
        
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
