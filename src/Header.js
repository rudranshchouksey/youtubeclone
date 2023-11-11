import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar  from '@mui/material/Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Header() {

  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className='header'>
        <div className='header__left'>
            <MenuIcon />
            <Link to='/'>
            <img className='header__logo' src='https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720950_1280.png' 
            alt=''/>
            </Link>
        </div>
        <div className='header__input'>
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text' />
            <Link to={`/search/${inputSearch}`}>
              <SearchIcon className='header__inputButton'/>
            </Link>
            
        </div>
        <div className='header__icons'>    
            <VideoCallSharpIcon className='header__icon' />
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            <Avatar alt='Remy Sharp' 
            src='https://picsum.photos/id/1/367/267' />
        </div>
    </div>
  )
}

export default Header