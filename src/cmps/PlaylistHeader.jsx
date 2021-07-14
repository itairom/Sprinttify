import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';


export const PlaylistHeader = ({ playlistDuration }) => {
    const { playlistInfo, playlistTracks } = useSelector(state => state.playlistModule)
    const inputEl = useRef(null)

    useEffect(() => {
        if (playlistInfo) {
            inputEl.current.style.backgroundImage = `url(${playlistInfo?.image_url})`
        }
    }, [playlistInfo])

    return (
        <nav ref={inputEl} className="playlist-header">
            <div className="left-header flex">
                <p className="header-title">{playlistInfo?.name}</p>
                <p className="header-desc">{playlistInfo?.description}</p>
            </div>
            <div className="right-header flex">
                <p>
                    {playlistTracks.length}
                    <span> Songs</span>
                </p>
                <p>{playlistDuration}</p>
            </div>
        </nav>
    )
}