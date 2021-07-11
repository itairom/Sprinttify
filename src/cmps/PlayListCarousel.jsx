import React, { useEffect, useState } from 'react'
import { PlayList } from './PlayList.jsx';
import { ReactComponent as RigthNav } from '../assets/imgs/right-nav.svg'
import { ReactComponent as LeftNav } from '../assets/imgs/left-nav.svg'


const _PlayListCarousel = ({playlistName,playlists}) => {

    const [currPage, setCurrPage] = useState(0)
    const [arrowState, setArrowState] = useState('left')
    const [currCarousel, setCurrCarousel] = useState([])

    useEffect(() => {
        if(playlists){
            playlistPaging()
        }
        return ()=>{}
    }, [playlists])




    const playlistPaging = () => {
        const currDisplay = playlists.slice(currPage, currPage + 5)
        setCurrCarousel(currDisplay)
    }

    const setNavBtn = (num, direction) => {
        setArrowState(direction)
        setCurrPage(num)
        if (playlists.length < 6) {
            setArrowState('')
        }
        playlistPaging()
    }

    return (
        <div className='main-carousel'>
            <div className="top-section">
                <p>{playlistName}</p>
                <div className="navs">
                    <LeftNav className={arrowState === 'left' ? 'nav-btn ' : 'nav-btn active'}
                        onClick={() => { setNavBtn(0, 'left') }} />
                    <RigthNav className={arrowState === 'right' ? 'nav-btn ' : 'nav-btn active'}
                        onClick={() => { setNavBtn(5, 'right') }} />
                </div>
            </div>

            <div className='playlist-carousel'>
                {currCarousel.map(playlist =>
                    <PlayList key={playlist.playlist_id} playlist={playlist} />
                )}
            </div>
        </div>
    )
}
export const PlayListCarousel = React.memo(_PlayListCarousel)