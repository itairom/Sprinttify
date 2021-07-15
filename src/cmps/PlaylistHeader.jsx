import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import LikedBackground from '../assets/imgs/liked_songs.jpg'

export const PlaylistHeader = ({ playlistDuration, likedPlaylist }) => {
    const { playlistInfo, playlistTracks } = useSelector(state => state.playlistModule)
    const inputEl = useRef(null)

    
    useEffect(() => {
        console.log(likedPlaylist);
        if (playlistInfo) {
            inputEl.current.style.backgroundImage = `url(${playlistInfo?.image_url})`
            
        }
    }, [playlistInfo])
    
    useEffect(()=>{
        if (likedPlaylist) {
            inputEl.current.style.backgroundImage = `url(https://res.cloudinary.com/dhorz8v6v/image/upload/v1626343119/liked_songs_ddbtht.jpg)`
        }
    },[likedPlaylist])
    return (
        <nav ref={inputEl} className="playlist-header">
            <div className="left-header flex">
                <p className="header-title">{playlistInfo?.name}</p>
                <p className="header-title">{likedPlaylist?.name}</p>
                <p className="header-desc">{playlistInfo?.description}</p>
            </div>
            <div className="right-header flex">
               {!likedPlaylist&& <p>
                    {playlistTracks.length}
                    <span> Songs</span>
                </p>}
               {likedPlaylist&& <p>
                    {likedPlaylist.length}
                    <span> Songs</span>
                </p>}
                <p>{playlistDuration}</p>
            </div>
        </nav>
    )
}