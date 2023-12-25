
import { useEffect, useState } from 'react';
import { Footer, LoadingScreen, Navbar } from './Components'
import { About, ErrorPage, Home, Login, News, Contact } from './Pages/index'
import { Routes, Route } from 'react-router-dom'


function App() {

  const [load, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {load ? <LoadingScreen /> :
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

            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>}
    </>

  )
}

export default App
