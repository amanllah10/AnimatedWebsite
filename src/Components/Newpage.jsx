import React, { useState } from 'react'
import Left from './Left'
import virat1 from './virat1.jpg'
import virat2 from './virat2.avif'
import virat3 from './irat3.webp'
import virat4 from './virat4.jpeg'
import virat5 from './virat5.jpeg'
import virat6 from './virat6.jpg'
import virat7 from './virat7.jpg'
import virat8 from './virat8.jpg'
import profile from './aman.jpg'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const Newpage = () => {

  const navigate = useNavigate()

  const mainPage = () => {
    navigate('/mainpage')
  }
  const imgs = [
    virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
    virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
    virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
    virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
    virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
    virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
    virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
    virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
    virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
    virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
  ]
  return (
    <>
      <Header />
      <div className='flex'>
        <div className="left w-[30%]">
          <Left />
        </div>
        <div className="right p-5 xl:w-[70%] w-[100%] overflow-y-scroll h-[90vh] ">
          {imgs.map((img, ids) => {
            return (

              <div key={ids} className='flex items-center flex-col md:flex-row' onClick={mainPage}>
                <img className='w-[300px] m-5  ' src={img} alt="" />
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eos omnis odio! Vero quae voluptatibus odio ad saepe dolore eligendi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati!</p>
                  <img src={profile} alt="" className='h-[40px] mt-2 rounded-full' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Newpage
