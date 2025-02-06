import React, { useContext, useState } from 'react'
import './Header.css'
import {Link} from 'react-router'
import search from './search.png'
import watch from './video.png'
import dotbar from './grid.png'
import bell from './bell.png'
import profile from './aman.jpg'
import menu from './menu.png'
import logo from './logo.png'
import Left from './Left'
import { sideContext } from './SidebarContext'



const Header = () => {


    const {isSidebarOpen,setIsSidebarOpen,showLeft} = useContext(sideContext)
    const [change, setOnChange] = useState()

    const onChange = (event) => {
        setOnChange(event.target.value)
        console.log(change)
        if (event.key === 'Enter') {
            alert(change)
            window.navigator('/newpage')
        }
    }

    return (
        <>
        <div className='navfather flex items-center justify-between p-2'>
            <div className='leftnav flex items-center'>
                <img className='invi ml-2 mr-5' src={menu} alt="" onClick={showLeft}/>
                <img className='invi w-[150px] h-[50px] mr-5' src={logo} alt="" />
            </div>
            <div className='navbetween flex'>
                <input className='rounded-2xl sm:w-[350px] w-[auto]  h-[40px]' type="text" name="" id="" onChange={onChange} onKeyDown={onChange} />
                <Link to = '/newpage'>
                <img className='ml-2' src={search} alt="" />
                </Link>
            </div>
            <div className='rightnav flex items-center'>
                <img className='mr-4' src={watch} alt="" />
                <img className='mr-4' src={dotbar} alt="" />
                <img className='mr-4' src={bell} alt="" />
                <img className='mr-4 rounded-full' src={profile} alt="" />
            </div>
        </div>
            <div className={`sidebar ${isSidebarOpen?'open':'close'}`}>
            <Left/>
        </div>
        </>
    )
}

export default Header
