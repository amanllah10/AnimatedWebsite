import React from 'react'
import home from './home.png'
import explore from './explore.png'
import subscription from './subscription.png'
import library from './library.png'
import history from './history.png'
import yourvideos from './your-video.png'
import watchlater from './watch-later.png'
import likevideos from './liked video.png'
import watchmore from './show more.png'
import { useNavigate } from 'react-router-dom'

const Left = () => {
    const navigate = useNavigate()
    const addPage = ()=>{
        navigate('/addpage')
    }
    return (
        <div>

            <div className='border-b-2 border-black'>
                <div className = 'flex items-center'>

                    <img className='m-2' src={home} alt="" />
                    <span>Home</span>
                </div>
                <div className = 'flex items-center'>

                    <img className='m-2' src={explore} alt="" />
                    <span>Explore</span>
                </div>
                <div className = 'flex items-center'>

                    <img className='m-2' src={subscription} alt="" />
                    <span>Subscription</span>
                </div>
            </div>
            <div className = 'flex items-center'>

                <img className='m-3' src={library} alt="" />
                <span>library</span>
            </div>
            <div className = 'flex items-center'>

                <img className='m-3' src={history} alt="" />
                <span>history</span>
            </div>
            <div className = 'flex items-center'>

                <img className='m-3' src={yourvideos} alt="" />
                <span>Your Videos</span>
            </div>
            <div className = 'flex items-center'>

                <img className='m-3' src={watchlater} alt="" />
                <span>Watch later</span>
            </div>
            <div className = 'flex items-center'>

                <img className='m-3' src={likevideos} alt="" onClick={addPage} />
                <span>Like videos</span>
            </div>
            <div className = 'flex items-center'>

                <img className='m-3' src={watchmore} alt="" />
                <span>Show more</span>
            </div>

        </div>
    )
}

export default Left
