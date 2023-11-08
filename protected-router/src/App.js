import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Account from './components/Account'
import Authentication from './components/Authentication'
import Login from './components/Login'
import Accountrapper from './components/Accountrapper'

function App() {
  return (
<Authentication>
    <Navbar />
    <div className='App'>
      <Routes>
        <Route path='/' element={<Accountrapper><Home/></Accountrapper>} />
        <Route path='about' element={<Accountrapper><About/></Accountrapper>} />
        <Route path='account' element={<Accountrapper><Account/></Accountrapper>} />
        <Route path='login' element={<Login/>} />
      </Routes>
    </div>
</Authentication>
  )
}

export default App
