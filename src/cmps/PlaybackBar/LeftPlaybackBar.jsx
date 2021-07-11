
import React, { useEffect } from 'react'

export const LeftPlaybackBar = ({img}) => {

    return (
        <section className="left-playback">
            <img src={img} alt="album-cover" />
            <div className="song-details">
                <p>Square One</p>
                <p>Coldplay</p>
            </div>
        </section>
    )
}