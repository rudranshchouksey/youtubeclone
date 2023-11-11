import React from 'react'
import './RecommendedVideos.css'
import Video from './Video'

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
        <h2>Recommended</h2>
        <div className='recommendedVideos__videos'>
            <Video 
            title='How to Build a Product that Scales into a Company'
            views='8,76,575 views'
            timestamp='05-Apr-2023'
            channelImage='https://yt3.googleusercontent.com/_zdq_bJARvd53nOy3qZLiCO1KUIeU1cha6O3MgCz37BAI20zxS0-AMKW6ztwBLsqxuDj9g2yUg=s176-c-k-c0x00ffffff-no-rj'
            channel='Harvard Innovation Labs'
            image='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6cs4nbSUmceRbsCIYEVeTXuK_V51g_cbvHR0TPJYdXWj_NHGx'
            />
            <Video 
            title='ZX-10R or R1 leke Mizoram Pahuche lekin Rasta mai ye sab hoga Socha nahi tha 😳 Ep. 04'
            views='77.380 views '
            timestamp='04-Nov-2023'
            channelImage='https://yt3.ggpht.com/ytc/APkrFKaRlwouw4FPnR-OpfGB51D3rjD1nPto4wDBugqMNw=s88-c-k-c0x00ffffff-no-rj'
            channel='Jatt Prabjot'
            image='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6cs4nbSUmceRbsCIYEVeTXuK_V51g_cbvHR0TPJYdXWj_NHGx'
            />
        </div>
    </div>
  )
}
export default RecommendedVideos