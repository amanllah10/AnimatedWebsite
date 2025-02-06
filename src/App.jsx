import React from 'react'
import './App.css'
import Home from './Components/Home'
import { Route, Routes } from 'react-router'
import Newpage from './Components/Newpage'
import NewContext from './Components/NewContext'
import Mainpage from './Components/Mainpage'
import SidebarContext from './Components/SidebarContext'
import LikePage from './Components/LikePage'

const App = () => {
  return (
    <div>
      <SidebarContext>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newpage' element={<Newpage />} />
          <Route path='/mainpage' element = {<Mainpage/>} />
          <Route path='/addpage' element = {<LikePage />} />
        </Routes>
      </SidebarContext>
    </div>
  )
}

export default App
