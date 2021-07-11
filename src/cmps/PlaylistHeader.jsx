import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


export const PlaylistHeader = ({ playlistDuration }) => {
    const { headerInfo, playlistTracks } = useSelector(state => state.playlistModule)

    // useEffect(() => {
    //     console.log(headerInfo);
    // }, [headerInfo])

    return (
        <nav className="playlist-header flex">
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