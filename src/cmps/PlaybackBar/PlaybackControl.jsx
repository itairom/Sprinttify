
import React, { useEffect } from 'react'
import { ReactComponent as Play } from '../../assets/imgs/play.svg'
import { ReactComponent as Pause } from '../../assets/imgs/pause.svg'
import { ReactComponent as Backward } from '../../assets/imgs/backward.svg'
import { ReactComponent as Forward } from '../../assets/imgs/forward.svg'
import { setIsPlaying,setCurrentTrackInfo, setCurrentTrackData } from '../../actions/PlaylistAction'
import { useDispatch, useSelector } from 'react-redux'
import { playlistService } from '../../services/playlistService'




export const PlaybackControl = () => {
    const dispatch = useDispatch()
    const { isPlaying,playlistTracks,currentTrack ,playlistInfo} = useSelector(state => state.playlistModule)

    useEffect(() => {
        if (currentTrack.data) {
            if (isPlaying) {
                currentTrack.data.play()
            }
            else {
                currentTrack.data.pause()
            }
        }
    }, [isPlaying])

    const onNextTrack = async () => {
        await dispatch(setIsPlaying(false))
        const nextTrack=  playlistService.playNextTrack(playlistTracks,currentTrack.info.track_id) 
        if (!nextTrack) return
        await dispatch(setCurrentTrackInfo(nextTrack))
        await dispatch(setCurrentTrackData(nextTrack.track_id, playlistInfo))
        await dispatch(setIsPlaying(true))
    }
    const onPreviousTrack = async () => {
        await dispatch(setIsPlaying(false))
        const nextTrack=  playlistService.playPreviousTrack(playlistTracks,currentTrack.info.track_id) 
        // if (typeof(nextTrack) === undefined) return
        if (!nextTrack) return
        await dispatch(setCurrentTrackInfo(nextTrack))
        await dispatch(setCurrentTrackData(nextTrack.track_id, playlistInfo))
        await dispatch(setIsPlaying(true))
    }



    return (
        <section className="playback-control">
            <div className="control-container">
                <Backward onClick={()=>{onPreviousTrack()}} className="backward-btn" />
                <div className="play-pause">
                    {!isPlaying && <Play className="play-btn" onClick={() => dispatch(setIsPlaying(true))} />}
                    {isPlaying && <Pause className="pause-btn" onClick={() => dispatch(setIsPlaying(false))} />}
                </div>
                <Forward onClick={()=>{onNextTrack()}} className="forward-btn" />
            </div>
        </section>
    )
}