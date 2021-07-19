
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Volume } from '../../assets/imgs/volume.svg'
import { useRelativeMousePosition } from '../../services/customHooks'
export const VolumeBar = () => {
    
    const position = useRelativeMousePosition()
    const { currentTrack } = useSelector(state => state.playlistModule)
    const inputEl = useRef(null)
    
    useEffect(() => {
        // if (position.x > 0 && position.x < 100 && position.location === 'volume-progress') {
        if (position.location === 'volume-progress') {
            onSetVolume()
        }
    }, [position])

    const onSetVolume = () => {
        inputEl.current.attributes[1].nodeValue = position.x
        if (currentTrack?.data?.volume) {
            let volume = ( position.x/100)
            currentTrack.data.volume = volume
        }
    }

    return (
        <section className="volume-bar">
            <div className="volume-container">
                <Volume className="volume-icon" />
            </div>
            <progress className="volume-progress" ref={inputEl} value="10" max="100">  </progress>
        </section>
    )
}
