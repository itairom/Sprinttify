import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsPlaying, setCurrentTrackInfo, setCurrentTrackData } from '../../actions/PlaylistAction'
import { playlistService } from '../../services/playlistService'

export const PlaybackProgressBar = () => {
    const [passedTime, setPassedTime] = useState(null)
    const [progressValue, setProgressValue] = useState(null)
    let progressInterval = null
    const { currentTrack, playlistTracks, playlistInfo, isPlaying } = useSelector(state => state.playlistModule)
    const dispatch = useDispatch()

    useEffect(() => {
        if (currentTrack.data) {
            if (isPlaying === true) {
                currentTrack.data.play()
            } else {
                currentTrack.data.pause()
            }
        }
    }, [isPlaying])

    useEffect(() => {
        progressInterval = setInterval(passedTimeInterval, 1000);
        return () => {
            clearInterval(progressInterval)
        }
    }, [currentTrack?.data?.duration])

    const passedTimeInterval = async () => {
        if (currentTrack.data?.currentTime) {
            if (currentTrack.data?.currentTime === currentTrack.data?.duration) {
                await dispatch(setIsPlaying(false))
                currentTrack.data.pause()
                onNextTrack()
            }
            else {
                console.log(currentTrack.data?.currentTime);
                setPassedTime(currentTrack.data?.currentTime)
                setProgressValue((currentTrack.data?.currentTime / currentTrack.data.duration) * 100)
            }
        }
    }
    const onNextTrack = async () => {
        const nextTrack = playlistService.playNextTrack(playlistTracks, currentTrack.info.track_id)
        await dispatch(setCurrentTrackInfo(nextTrack))
        await dispatch(setCurrentTrackData(nextTrack.track_id, playlistInfo))
        await dispatch(setIsPlaying())
    }

    const timeFormat = (time) => {
        if (isNaN(time) || !time || time === Infinity) return

        var date = new Date(0);
        date.setSeconds(time); // specify value for SECONDS here
        var timeString = date.toISOString().substr(14, 5);
        return timeString
    }

    return (
        <section className="main-progress-bar">
            <p>{timeFormat(passedTime)}</p>
            <progress value={progressValue} max="100"></progress>
            <p className="total-time" >{timeFormat(currentTrack?.data?.duration)}</p>
        </section >
    )
}
