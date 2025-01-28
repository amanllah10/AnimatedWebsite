import React from 'react'
import './Home.css'
import Left from './Left'
import Main from './Main'
import Right from './Right'

const Home = () => {
  return (
    <div className='lg:w-[95vw] flex flex-row w-[100vw] m-auto bg-[#F0F2F5]'>
      <div className="left w-[20vw] ">
        <Left/>
      </div>
      <div className="main w-[60vw] ">
        <Main/>
      </div>
      <div className="right w-[15vw] ">
        <Right/>
      </div>
    </div>
  )
}

export default Home
