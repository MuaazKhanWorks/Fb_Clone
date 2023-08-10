import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LogPage from './Login/LogPage'
import Main from './Components/Main'
import Profile from './Pages/Profile'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogPage/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
