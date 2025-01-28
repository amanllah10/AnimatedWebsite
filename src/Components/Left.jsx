import React from 'react'
import news from './news.png'
import './Left.css'
import friends from './friends.png'
import group from './group.png'
import marketplace from './marketplace.png'
import watch from './watch.png'
import shortcut1 from './shortcut-1.png'
import shortcut2 from './shortcut-2.png'
import shortcut3 from './shortcut-3.png'
import shortcut4 from './shortcut-4.png'


const Left = () => {
    return (
        <>
            <div className='leftcont'>
                <div className='flex m-5 items-center text-gray-800'>
                    <img src={news} alt="" className='m-2' />
                    <h1>Latest news</h1>
                </div>
                <div className='flex m-5 items-center'>
                    <img src={friends} alt="" className='m-2' />
                    <h1>Friends</h1>
                </div>
                <div className='flex m-5 items-center'>
                    <img src={group} alt="" className='m-2' />
                    <h1>Group</h1>
                </div>
                <div className='flex m-5 items-center'>
                    <img src={marketplace} alt="" className='m-2' />
                    <h1>Marketplace</h1>
                </div>
                <div className='flex m-5 items-center'>
                    <img src={watch} alt="" className='m-2' />
                    <h1>Watch</h1>
                </div>
                <button className='m-5'>See more</button>
            </div>
            <div className='text-gray-800'>
                <h1 className='m-3 font-bold'>Your Shortcuts</h1>
                <div className='flex items-center m-5'>
                    <img src={shortcut1} alt="" className='m-2' />
                    <h1>Web development</h1>
                </div>
                <div className='flex items-center m-5'>
                    <img src={shortcut2} alt="" className='m-2' />
                    <h1>Web design course</h1>
                </div>
                <div className='flex items-center m-5'>
                    <img src={shortcut3} alt="" className='m-2' />
                    <h1>Full Stack development</h1>
                </div>
                <div className='flex items-center m-5'>
                    <img src={shortcut4} alt="" className='m-2' />
                    <h1>Website Experts</h1>
                </div>
            </div>
        </>
    )
}

export default Left
