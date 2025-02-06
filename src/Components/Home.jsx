import React, { useState } from 'react'
import './Home.css'
import Header from './Header'
import Headerupper from './Headerupper'
import Left from './Left'
import Main from './Main'

const Home = () => {
  return (
    <div className='homecont'>
      <div className="left">
        <Left/>
      </div>
      <div className="header">
        <Header/>
      </div>
      <div className="headerupper">
        <Headerupper/>
      </div>
      <div className="main">
        <Main/>
      </div>
    </div>
  )
}

export default Home
