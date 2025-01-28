import React from 'react'
import twotwo from './twotwo.webp'
import eight from './eight.webp'
import advertisement from './advertisement.png'
import member1 from './member-1.png'
import member2 from './member-2.png'
import member3 from './member-3.png'

const Right = () => {
    return (
        <div className='p-2'>
            <h1 className='font-bold m-4'>Events</h1>
            <div className='flex items-center m-2'>
                <img className='w-[60px]' src={twotwo} alt="" />
                <div>
                    <h1 className='font-bold'>Social Media</h1>
                    <p>Willson tech park</p>
                    <p>more info</p>
                </div>
            </div>
            <div className='flex m-2'>
                <img className='w-[60px]' src={eight} alt="" />
                <div>
                    <h1 className='font-bold'>Social Media</h1>
                    <p>Willson tech park</p>
                    <p>more info</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <h1>Advertisement</h1>
                <h1>Close</h1>
            </div>
            <img className='w-full h-[20vh] mt-5' src={advertisement} alt="" />
            <div className='flex justify-between'>
                <h1>Conversation</h1>
                <h1>new chat</h1>
            </div>
            <div className='flex items-center mt-3 font-bold'>
                <img className='m-2 rounded-full' src={member1} alt="" />
                <h1>Alina mosa</h1>
            </div>
            <div className='flex items-center mt-3 font-bold'>
                <img className='m-2 rounded-full' src={member2} alt="" />
                <h1>Jhon nicholson</h1>
            </div>
            <div className='flex items-center mt-3 font-bold'>
                <img className='m-2 rounded-full' src={member3} alt="" />
                <h1>rosa</h1>
            </div>
        </div>
    )
}

export default Right
