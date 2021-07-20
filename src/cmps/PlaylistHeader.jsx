import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

export const PlaylistHeader = ({ playlistDuration, likedPlaylist, genre, genreLength }) => {
    const { playlistInfo, playlistTracks } = useSelector(state => state.playlistModule)
    const inputEl = useRef(null)


    useEffect(() => {
        if (playlistInfo) {
            inputEl.current.style.backgroundImage = `url(${playlistInfo?.image_url})`
        }
        if (genre) {
            inputEl.current.style.backgroundImage = `url(${genre?.image_url})`
        }
    }, [playlistInfo])

    useEffect(() => {
        if (likedPlaylist) {
            inputEl.current.style.backgroundImage = `url(https://res.cloudinary.com/dhorz8v6v/image/upload/v1626343119/liked_songs_ddbtht.jpg)`
        }
    }, [likedPlaylist])

    const isUndefiend = (obj) => {
        if (typeof obj !== 'undefined') return false
        return true

    }
    return (
        <nav ref={inputEl} className="playlist-header">
            <div className="left-header flex">
                {isUndefiend(genre) && <>
                    <p className="header-title">{playlistInfo?.name}</p>
                    <p className="header-title">{likedPlaylist?.name}</p>
                    <p className="header-desc">{playlistInfo?.description}</p>
                </>}
            </div>
            <div className="right-header flex">
                {isUndefiend(genre) && !likedPlaylist && <p>
                    {playlistTracks.length}
                    <span> Songs</span>
                </p>}
                {genre && <p  >
                    {genreLength}
                    <span className="genre-name"> {genre.category_name}</span>
                    <span> Playlists</span>
                </p>}
                {likedPlaylist && <p>
                    {likedPlaylist.length}
                    <span> Songs</span>
                </p>}
                <p>{playlistDuration}</p>
            </div>
        </nav>
    )
}