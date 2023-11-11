import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelRow 
        image='https://yt3.googleusercontent.com/ytc/APkrFKapf8X30fx26MeQs3O6Vdy0jNCroWTLqSzI0zKD_Q=s176-c-k-c0x00ffffff-no-rj'
        channel="Clever Programer"
        verified
        subs="1.29M"
        noofVideos={789}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
        />
        <hr/>
        <VideoRow 
            title='How to Build a Product that Scales into a Company'
            views='8,76,575 views'
            timestamp='05-Apr-2023'
            subs="660k"
            channel='Harvard Innovation Labs'
            image='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6cs4nbSUmceRbsCIYEVeTXuK_V51g_cbvHR0TPJYdXWj_NHGx'
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />
    </div>
  )
}

export default SearchPage