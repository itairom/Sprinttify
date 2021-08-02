
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Volume } from '../../assets/imgs/volume.svg'
import { useRelativeMousePosition, useFetch } from '../../services/customHooks'
export const VolumeBar = () => {

    const position = useRelativeMousePosition('')
    const { currentTrack } = useSelector(state => state.playlistModule)
    const inputEl = useRef(null)


    const [query, setQuery] = useState('list');
    const url = query && `https://api.sprintt.co/crypto/currencies/${query}`;
    const { status, data } = useFetch(url);


    https://api.sprintt.co/crypto/currencies/

    useEffect(() => {
        // if (position.x > 0 && position.x < 100 && position.location === 'volume-progress') {
        if (position.location === 'volume-progress') {
            onSetVolume()
        }
    }, [position])

    useEffect(() => {
        console.log(status);
        console.log(data);
    }, [data])



    const onSetVolume = () => {
        inputEl.current.attributes[1].nodeValue = position.x
        if (currentTrack?.data?.volume) {
            let volume = (position.x / 100)
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
