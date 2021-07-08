import React, { useEffect, useState } from 'react'
import { PlayList } from './PlayList.jsx';
import { ReactComponent as RigthNav } from '../assets/imgs/right-nav.svg'
import { ReactComponent as LeftNav } from '../assets/imgs/left-nav.svg'

const gPlaylists =
    [
        {
            "description": "Start your day with calm and cool jazz.",
            "image_url": "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
            "name": "Jazzy Morning",
            "playlist_id": "37i9dQZF1DXdziGPHNE40t"
        },
        {
            "description": "The home for alternative electronic music. Cover: Fred again.. and The Blessed Madonna",
            "image_url": "https://i.scdn.co/image/ab67706f0000000345e1025ae30404128c57d824",
            "name": "Altar",
            "playlist_id": "37i9dQZF1DXa71eg5j9dKZ"
        },
        {
            "description": "the loose knit sweater, diy bedroom mural wall, alt milk of playlists. ✨ featuring Still Woozy",
            "image_url": "https://i.scdn.co/image/ab67706f0000000330454e871ce5a1b00703716f",
            "name": "Lorem",
            "playlist_id": "37i9dQZF1DXdwmD5Q7Gxah"
        },
        {
            "description": "Smooth joints. Cover: Ruti",
            "image_url": "https://i.scdn.co/image/ab67706f00000003cb35da286acfe287316c4640",
            "name": "Butter",
            "playlist_id": "37i9dQZF1DWVzZlRWgqAGH"
        },
        {
            "description": "Feel great with these timelessly fun songs!",
            "image_url": "https://i.scdn.co/image/ab67706f00000003e649da22aa371c86c801603f",
            "name": "Have a Great Day!",
            "playlist_id": "37i9dQZF1DX7KNKjOK0o75"
        },
        {
            "description": "Chill beats for cool coffeehouse vibes.",
            "image_url": "https://i.scdn.co/image/ab67706f000000033f861d7f7b340e5e4934bb78",
            "name": "Lo-Fi Cafe",
            "playlist_id": "37i9dQZF1DX9RwfGbeGQwP"
        },
        {
            "description": "Lounge and chill out music for your workday.",
            "image_url": "https://i.scdn.co/image/ab67706f00000003f1ecb8caee4c015b3f33058a",
            "name": "Workday Lounge",
            "playlist_id": "37i9dQZF1DWT5lkChsPmpy"
        },
        {
            "description": "Curl up in your favorite spot with some sweet, mellow tunes...",
            "image_url": "https://i.scdn.co/image/ab67706f000000035ae7aa0454c9eafdd6505fda",
            "name": "Your Favorite Coffeehouse",
            "playlist_id": "37i9dQZF1DX6ziVCJnEm59"
        },
        {
            "description": "Chillout hip-hop vibes. Cover: Kota The Friend",
            "image_url": "https://i.scdn.co/image/ab67706f00000003dd2fb26650c3d75d8a32c972",
            "name": "Mellow Bars",
            "playlist_id": "37i9dQZF1DWT6MhXz0jw61"
        },
        {
            "description": "High-Key bangers for Low-Key enjoyment.",
            "image_url": "https://i.scdn.co/image/ab67706f00000003c0c5bb00461fd08b95f9b9da",
            "name": "Low-Key",
            "playlist_id": "37i9dQZF1DX2yvmlOdMYzV"
        }
    ]



const _PlayListCarousel = ({playlistName}) => {

    const [currPage, setCurrPage] = useState(0)
    const [arrowState, setArrowState] = useState('left')
    const [currCarousel, setcurrCarousel] = useState([])

    useEffect(() => {
        console.log('in')
        playlistPaging()
        console.log(currCarousel);
    }, [currPage])

    const playlistPaging = () => {
        const playlist = gPlaylists.slice(currPage, currPage + 5)
        console.log("🚀 ~ file: PlayListCarousel.jsx ~ line 85 ~ playlistPaging ~ playlist", playlist)
        // return playlist
        setcurrCarousel(playlist)
    }

    const setNavBtn = (num, direction) => {
        setCurrPage(num)
        setArrowState(direction)
        setCurrPage(num)
        if (gPlaylists.length < 6) {
            setArrowState('')
        }

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
                    <PlayList key={playlist._id} playlist={playlist} />
                )}
            </div>
        </div>
    )
}
export const PlayListCarousel = React.memo(_PlayListCarousel)