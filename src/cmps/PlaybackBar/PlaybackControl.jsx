
import React from 'react'
import { ReactComponent as Play } from '../../assets/imgs/play.svg'
import { ReactComponent as Pause } from '../../assets/imgs/pause.svg'
import { ReactComponent as Backward } from '../../assets/imgs/backward.svg'
import { ReactComponent as Forward } from '../../assets/imgs/forward.svg'
import {  setIsPlaying } from '../../actions/PlaylistAction'
import { useDispatch, useSelector } from 'react-redux'


export const PlaybackControl = () => {
    const dispatch = useDispatch()
    const { isPlaying } = useSelector(state => state.playlistModule)


    return (
        <section className="playback-control">
            <div className="control-container">

                <Backward className="backward-btn" />
                <div className="play-pause">
                    {!isPlaying && <Play className="play-btn" onClick={() => dispatch(setIsPlaying())} />}
                    {isPlaying && <Pause className="pause-btn" onClick={() => dispatch(setIsPlaying())} />}
                </div>
                <Forward className="forward-btn" />
            </div>
        </section>
    )
}