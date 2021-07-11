
import React, { useEffect, useState } from 'react'
import { ReactComponent as Play } from '../../assets/imgs/play.svg'
import { ReactComponent as Pause } from '../../assets/imgs/pause.svg'
import { ReactComponent as Backward } from '../../assets/imgs/backward.svg'
import { ReactComponent as Forward } from '../../assets/imgs/forward.svg'

export const PlaybackControl = () => {

    const [isPlaying, setIsPlaying] = useState('play')

    // useEffect(() => {
    // }, [])

    return (
        <section className="playback-control">
            <div className="control-container">

                <Backward className="backward-btn" />
                <div className="play-pause">
                    {(isPlaying === 'pause') && <Pause className="pause-btn" onClick={() => setIsPlaying('play')} />}
                    {isPlaying === 'play' && <Play className="play-btn" onClick={() => setIsPlaying('pause')} />}
                </div>
                <Forward className="forward-btn" />
            </div>
        </section>
    )
}