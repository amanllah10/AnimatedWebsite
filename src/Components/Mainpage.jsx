import React from 'react'
import './Mainpage.css'
import newly from './new.mp4'
import virat1 from './virat1.jpg'
import virat2 from './virat2.avif'
import virat3 from './irat3.webp'
import virat4 from './virat4.jpeg'
import virat5 from './virat5.jpeg'
import virat6 from './virat6.jpg'
import virat7 from './virat7.jpg'
import virat8 from './virat8.jpg'
import profile from './aman.jpg'
import like from './like.jpg'
import unlike from './unlike.png'
import download from './ownload.webp'
import share from './share.png'
import clip from './clip.webp'
import save from './save.png'
import Header from './Header'

const Mainpage = () => {


    const ranImgs = [
        virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
        virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
        virat1, virat2, virat3, virat4, virat5, virat6, virat7, virat8,
    ]
    return (
        <>
        <Header/>
            <div className='flex w-[98%] m-auto lg:flex-row flex-col ' >
                <div className='m-5 w-[95%] lg:w-[70%]'>
                    <video className='w-full' src={newly} controls ></video>
                    <h1 className='font-bold text-1xl lg:text-2xl mt-2 mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat molestias magnam officiis excepturi quo rem est facere illo veritatis cum.</h1>
                    <div className='flex justify-between flex-col xl:flex-row'>
                        <div className='flex items-center'>

                            <img src={profile} alt="" className='rounded-full mr-2' />
                            <div className=''>
                                <p>Informative Channel</p>
                                <p>Subscribe</p>
                            </div>
                        </div>
                        <div>

                            <div className='flex'>
                                <div className='flex items-center sm:m-3 m-7'>
                                    <img src={like} alt="" className='mr-2' />
                                    <p>like</p>
                                </div>
                                <div className='flex items-center sm:m-3 m-7'>
                                    <img src={unlike} alt="" className='mr-2' />
                                    <p>unlike</p>
                                </div>
                                <div className='flex items-center sm:m-3 m-7'>
                                    <img src={share} alt="" className='mr-2' />
                                    <p>share</p>
                                </div>
                                <div className='bund flex items-center m-3'>
                                    <img src={download} alt="" className='mr-2' />
                                    <p>download</p>
                                </div>
                                <div className='bund flex items-center m-3'>
                                    <img src={clip} alt="" className='mr-2' />
                                    <p>clip</p>
                                </div>
                                <div className='bund flex items-center m-3'>
                                    <img src={save} alt="" className='mr-2' />
                                    <p>save</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' lg:w-[30%] w-[95%] overflow-y-scroll h-[100vh]'>
                    {ranImgs.map((imgs, ids) => {
                        return (
                            <div key={ids} className='flex items-end m-5'>
                                <img src={imgs} alt="" className='sm:w-[50%] w-[50%]  lg:w-full h-[150px]' />
                                <div className='ml-2 block lg:hidden 2xl:block sm:w-[50%] w-[50%] '>

                                <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officia.</p>
                                <img src={profile} alt="" className='rounded-full' />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Mainpage
