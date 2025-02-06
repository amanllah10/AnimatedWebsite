import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Main.css'
import virat1 from './virat1.jpg'
import virat2 from './virat2.avif'
import virat3 from './irat3.webp'
import virat4 from './virat4.jpeg'
import virat5 from './virat5.jpeg'
import virat6 from './virat6.jpg'
import virat7 from './virat7.jpg'
import virat8 from './virat8.jpg'
import profile from './aman.jpg'
import axios from 'axios'

const Main = () => {

    const navigate = useNavigate()
    const [images,setImages] = useState([])

    useEffect(()=>{
        axios.get('https://picsum.photos/v2/list?page=2&limit=100')
        .then (response =>{
            setImages(response.data)
        })
    },[])

    const goneOther = ()=>{
        navigate('/newpage')
    }

    return (
        <div className='maincont p-3 grid grid-cols-4 gap-5 overflow-y-scroll h-[82vh]'>
            {images.map((imgSrc, index) => {
                return (
                    <div key={index} onClick={goneOther}>
                        <img className='w-full object-cover h-[200px] ' src={imgSrc.download_url} alt="" />
                        <div className='flex'>
                            <img className='rounded-full m-2' src={profile} alt="" />
                            <h1 className='m-2'>This is a good news that Lorem ipsum dolor sit amet.</h1>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Main
