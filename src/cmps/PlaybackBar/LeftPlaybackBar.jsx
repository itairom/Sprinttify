
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const LeftPlaybackBar = ({ img }) => {
    const { currentTrack } = useSelector(state => state.playlistModule)
    
    useEffect(() => {
        if (!currentTrack) return
        console.log(currentTrack.info);
    }, [currentTrack.info]) // ?

    return (
        <section className="left-playback">
            {currentTrack?.info?.is_liked === 0 && <img src={img} alt="album-cover" />}
            {currentTrack?.info?.is_liked === 1 && <img src={'https://res.cloudinary.com/dhorz8v6v/image/upload/v1626343119/liked_songs_ddbtht.jpg'} alt="album-cover" />}
            <div className="song-details">
                <p>{currentTrack?.info?.name}</p>
                <p>{currentTrack?.info?.artists_names}</p>
            </div>
        </section>
    )
}