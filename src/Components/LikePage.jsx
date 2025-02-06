import axios from 'axios'
import virat1 from './virat1.jpg'
import virat2 from './virat2.avif'
import virat3 from './irat3.webp'
import virat4 from './virat4.jpeg'
import virat5 from './virat5.jpeg'
import React, { useEffect, useState } from 'react'

const LikePage = () => {
    const [isApi,setIsApi] = useState([])

    useEffect(()=>{
      const imgsColl = [
        virat1,virat2,virat3,
        virat1,virat2,virat3,
        virat1,virat2,virat3,
      ]
    },[])

  return (
    <div>
      {imgsColl.map((imgs,ids)=>{
        <div key={ids}>
            <img className='w-[200px] h-[200px]' src={imgs} alt="" />
        </div>
      })}
    </div>
  )
}

export default LikePage
