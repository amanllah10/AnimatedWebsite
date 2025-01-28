import React from 'react'
import './Main.css'
import member1 from './member-1.png'
import member2 from './member-2.png'
import member3 from './member-3.png'
import member4 from './member-4.png'
import member5 from './member-5.png'
import profile from './profile.png'
import livevideo from './live-video.png'
import photo from './photo.png'
import feeling from './feeling.png'
import feedimage from './feed-image-1.png'
import feedimage2 from './feed-image-2.png'
import video from './video.mp4'

const Main = () => {
    return (
        <div>
            <div className="mainfather text-gray-600">
                <div className="imgs p-5 grid grid-cols-5 gap-5">
                    <img className='w-[200px] h-[250px] rounded-2xl' src={member2} alt="" />
                    <img className='w-[200px] h-[250px] rounded-2xl' src={member1} alt="" />
                    <img className='w-[200px] h-[250px] rounded-2xl' src={member3} alt="" />
                    <img className='w-[200px] h-[250px] rounded-2xl' src={member4} alt="" />
                    <img className='w-[200px] h-[250px] rounded-2xl' src={member5} alt="" />
                </div>
                <div className='card1 border-2 border-white bg-white m-5'>
                    <div className="profile flex m-5">
                        <img className='rounded-full mr-1' src={profile} alt="" />
                        <div>
                            <h1>Jhon Nicholson</h1>
                            <p>Public</p>
                        </div>
                    </div>
                    <div className='p-5'>

                        <input type="text" name="" id="" placeholder="What's on Your Mind" className='border-white border-2 rounded-2xl ml-2 w-full' />
                    </div>
                    <div className='livecont flex justify-center sm:flex sm:flex-row flex-col '>
                        <div className='flex items-center m-3'>
                            <img className='m-2' src={livevideo} alt="" />
                            <h1>Live Video</h1>
                        </div>
                        <div className='flex items-center m-3'>
                            <img className='m-2' src={photo} alt="" />
                            <h1>Photo/video</h1>
                        </div>
                        <div className='flex items-center m-3'>

                            <img className='m-2' src={feeling} alt="" />
                            <h1>feeling/Activity</h1>
                        </div>
                    </div>
                </div>
                <div className='card2 bg-white m-5'>

                    <div className="profile flex mb-5 ">
                        <img className='rounded-full mr-1' src={profile} alt="" />
                        <div>
                            <h1>Jhon Nicholson</h1>
                            <p>Public</p>
                        </div>
                    </div>
                    <p className='pb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, animi velit commodi consequuntur, officia harum ea a nihil eveniet, id quae dolore eum earum vel excepturi aperiam. Ipsa ut commodi cum cumque, totam, cupiditate, dolore nobis nostrum blanditiis laborum.</p>
                    <img className='h-full w-full' src={feedimage} alt="" />
                </div>
                <div className='card3 bg-white m-5'>

                    <div className="profile flex mb-5">
                        <img className='rounded-full mr-1' src={profile} alt="" />
                        <div>
                            <h1>Jhon Nicholson</h1>
                            <p>Public</p>
                        </div>
                    </div>
                    <p className='pb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, animi velit commodi consequuntur, officia harum ea a nihil eveniet, id quae dolore eum earum vel excepturi aperiam. Ipsa ut commodi cum cumque, totam, cupiditate, dolore nobis nostrum blanditiis laborum.</p>
                    <img className='w-full h-full' src={feedimage2} alt="" />
                </div>
            </div>
            <div className='card3 bg-white m-5'>

                <div className="profile flex mb-5">
                    <img className='rounded-full mr-1' src={profile} alt="" />
                    <div>
                        <h1>Jhon Nicholson</h1>
                        <p>Public</p>
                    </div>
                </div>
                <p className='pb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, animi velit commodi consequuntur, officia harum ea a nihil eveniet, id quae dolore eum earum vel excepturi aperiam. Ipsa ut commodi cum cumque, totam, cupiditate, dolore nobis nostrum blanditiis laborum.</p>
                <video src={video} controls></video>
            </div>
        </div>
    )
}

export default Main
