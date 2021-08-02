import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/imgs/logo.svg'



export function NavBar() {
    const [toggleState, setToggleState] = useState('home');



    return (
        <header className="app-header">
            <nav className="main-nav ">
                <Logo className="nav-logo" />
                <div onClick={() => setToggleState('home')} className={toggleState === 'home' ? 'nav-btn active' : 'nav-btn'}>
                    <Link to='/home'>
                        <img src="imgs/home_icon.png" alt="home" />
                        <span>Home</span>
                    </Link>
                </div>
                <div onClick={() => setToggleState('browse')} className={toggleState === 'browse' ? 'nav-btn active' : 'nav-btn'}>
                    <Link to='/browse'>
                        <img src="imgs/browse_icon.png" alt="browse" />
                        <span>Browse</span>
                    </Link>
                </div>
                <div onClick={() => setToggleState('liked')} className={toggleState === 'liked' ? 'nav-btn active' : 'nav-btn'}>
                    <Link to='/likedsongs'>
                        <img src="imgs/liked_songs_icon.png" alt="liked" />
                        <span>Liked songs</span>
                    </Link>
                </div>
            </nav>
        </header>
    )

}