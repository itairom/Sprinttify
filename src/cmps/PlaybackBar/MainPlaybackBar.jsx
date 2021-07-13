
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LeftPlaybackBar } from './LeftPlaybackBar'
import { PlaybackControl } from './PlaybackControl'
import { PlaybackProgressBar } from './PlaybackProgressBar'
import { VolumeBar } from './VolumeBar'

export const MainPlaybackBar = () => {
    const { playlistInfo, playlistTracks } = useSelector(state => state.playlistModule)

    // useEffect(() => {
    //     console.log(playlistInfo);

    // }, [playlistInfo])

    return (
        <section className="main-playback">
            <LeftPlaybackBar img={playlistInfo?.image_url} />
            <PlaybackControl />
            <PlaybackProgressBar />
            <VolumeBar />
        </section>
    )
}