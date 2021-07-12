
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const LeftPlaybackBar = ({ img }) => {
    const { currentTrack } = useSelector(state => state.playlistModule)

    useEffect(() => {
        if (!currentTrack) return
        console.log(currentTrack);
    }, [currentTrack])

    // if (!currentTrack) return
    // const { name, album_name, artists_names, duration } = currentTrack
    return (
        <section className="left-playback">
            <img src={img} alt="album-cover" />
            <div className="song-details">
                <p>{currentTrack?.name}</p>
                <p>{currentTrack?.artists_names}</p>
            </div>
        </section>
    )
}