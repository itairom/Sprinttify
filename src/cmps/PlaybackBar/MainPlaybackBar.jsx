
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LeftPlaybackBar } from './LeftPlaybackBar'
import { PlaybackControl } from './PlaybackControl'

export const MainPlaybackBar = () => {
    const { headerInfo, playlistTracks } = useSelector(state => state.playlistModule)

    useEffect(() => {
        console.log(headerInfo);

    }, [headerInfo])

    return (
        <section className="main-playback">
            <LeftPlaybackBar img={headerInfo?.image_url} />
        <PlaybackControl />
        </section>
    )
}