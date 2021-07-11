
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LeftPlaybackBar } from './LeftPlaybackBar'
import { PlaybackControl } from './PlaybackControl'

export const PlaybackProgressBar = () => {

    // useEffect(() => {
    //     console.log(headerInfo);

    // }, [headerInfo])

    // (Time passed in seconds / Song duration in seconds) X 100 = Song progress



    return (
        <section className="main-progress-bar">
        <p>0:40</p>
        <progress value="35" max="100">  </progress>
        <p className="total-time" >4:47</p>
        </section>
    )
}
