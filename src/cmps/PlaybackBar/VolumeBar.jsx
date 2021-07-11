
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Volume } from '../../assets/imgs/volume.svg'
import { useRelativeMousePosition } from '../../services/customHooks'
export const VolumeBar = () => {


    const position = useRelativeMousePosition()



    const inputEl = useRef(null)
    useEffect(() => {

        console.log(position);
        if (position.x > 0 && position.x < 100 && position.location === 'volume-progress') {
            onSetVolume()
        }

    }, [position])

    // (Time passed in seconds / Song duration in seconds) X 100 = Song progress

    const onSetVolume = () => {
        // console.log(position);
        // console.log(inputEl.current.attributes[1].nodeValue);
        inputEl.current.attributes[1].nodeValue = position.x
    }


return (
    <section className="volume-bar">
        <div className="volume-container">
            <Volume className="volume-icon" />
        </div>
        {/* <progress onClick={() => { onSetVolume() }} ref={inputEl} value="35" max="100">  </progress> */}
        <progress className="volume-progress" ref={inputEl} value="35" max="100">  </progress>
    </section>
)
}
