import React, { useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { ReactComponent as Menu } from '../assets/svg/menu_black_24dp.svg'
import { ReactComponent as ToggleDark } from '../assets/svg/settings_brightness_white_24dp.svg'
import { useDispatch } from 'react-redux'


export function AppHeader() {
    const [isMobile, setIsMobile] = useState(false)
    const dispatch = useDispatch()
    const changeMobile = () => {
        setIsMobile(prev => prev = !prev)
    }

    const history = useHistory()
    // const params = useParams()
    // const location = useLocation()
    return (
        <header className="app-header">
            <nav className="main-nav ">
                {!isMobile && <div className="left-nav">
                    <Link to='/'><span>Home</span></Link>
                    <Link to='/about'><span>About</span></Link>
                </div>}
                   
            </nav>
        </header>
    )
}
