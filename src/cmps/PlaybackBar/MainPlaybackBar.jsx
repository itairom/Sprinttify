
import React from 'react'
import { useSelector } from 'react-redux'
import { LeftPlaybackBar } from './LeftPlaybackBar'
import { PlaybackControl } from './PlaybackControl'
import { PlaybackProgressBar } from './PlaybackProgressBar'
import { VolumeBar } from './VolumeBar'

export const MainPlaybackBar = () => {
    const { playlistInfo } = useSelector(state => state.playlistModule)

    return (
        <section className="main-playback">
            <LeftPlaybackBar img={playlistInfo?.image_url} />
            <PlaybackControl />
            <PlaybackProgressBar />
            <VolumeBar />
        </section>
    )
}