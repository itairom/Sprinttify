import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';


export const PlaylistHeader = ({ playlistDuration }) => {
    const { headerInfo, playlistTracks } = useSelector(state => state.playlistModule)
    const inputEl = useRef(null)

    useEffect(() => {
        console.log(headerInfo);
        // console.log( inputEl.current.style.backgroundImage)

        // console.log( inputEl.current.style.backgroundImage)
        if (headerInfo) {
            console.log(headerInfo.image_url);
            inputEl.current.style.backgroundImage = `url(${headerInfo?.image_url})`
        }
    }, [headerInfo])

    return (
        <nav ref={inputEl} className="playlist-header">
            <div className="left-header flex">
                <p className="header-title">{headerInfo?.name}</p>
                <p className="header-desc">{headerInfo?.description}</p>
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