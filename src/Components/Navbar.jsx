import React from 'react'
import './Navbar.css'
import bell from './bell2.jpg'
import message from './message2.png'
import watch from './watch.png'
import search from './search.png'
import fb from './fb.png'
import home from './home.png'
import computer from './computer.jpg'
import shop from './hop.png'
import group from './group.png'
import game from './game.jpg'
import dot from './dots.jpg'

const Navbar = () => {
  return (
    <div className='navcont flex justify-between items-center'>
      <div className="rightnav  w-[100%] sm:w-[auto] flex items-center">
        <img className='m-3' src={fb} alt="" />
        <input className='rounded-2xl' type="text" name="" id="" />
      </div>
      <div className="between  flex">
        <img className='m-3 w-[60px]' src={home} alt="" />
        <img className='m-3 w-[60px]' src={computer} alt="" />
        <img className='m-3 w-[90px]' src={shop} alt="" />
        <img className='m-3 w-[50px]' src={group} alt="" />
        <img className='m-3 w-[60px]' src={game} alt="" />
      </div>
      <div className="leftnav flex items-center  ">
        <h1 className='text-3xl text-white font-bold'>Facebook</h1>
        <img className='m-3' src={bell} alt="" />
        <img className='m-3' src={message} alt="" />
        <img className='m-3' src={watch} alt="" />
        <img src={dot} alt="" />
      </div>
    </div>
  )
}

export default Navbar
