
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { skipTen, setIsPlaying, setCurrentTrackInfo, setCurrentTrackData, setCurrentTrackDuration } from '../../actions/PlaylistAction'
import { playlistService } from '../../services/playlistService'



export const PlaybackProgressBar = () => {
    const dispatch = useDispatch()
    const elRef = useRef();

    const { currentTrack, playlistTracks, playlistInfo, isPlaying } = useSelector(state => state.playlistModule)
    let interval =null
    const [passedTime, setPassedTime] = useState(null)
    const [currTime, setCurrTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        if (currentTrack.data) {
            if (isPlaying === true) {
                currentTrack.data.play()
            } else {
                currentTrack.data.pause()
            }
        }
    }, [isPlaying])

//CHRECK

    // useEffect(() => { 
    //     console.log('change song');
    //     elRef.current.value = 0
    //     return () => {
    //         if (currentTrack.data) {
    //                     currentTrack.data.pause()
    //                     clearInterval(interval)
    //                 }
    //         }
    //     }, [currentTrack.info])
        
        
        useEffect(() => {
            if (!isNaN(currentTrack?.data?.duration)) {
                setDuration(currentTrack?.data?.duration)
            }
            interval = setInterval(passedTimeInterval, 1000);


    }, [currentTrack?.data?.duration])
    // }, [])

    const passedTimeInterval = () => {
        setInterval(async () => {
            if (currentTrack.data?.currentTime) {
                if (currentTrack.data?.currentTime === currentTrack.data?.duration) {
                    // if (currentTrack.data?.ended) {
                    console.log('song ended');
                    await dispatch(setIsPlaying(false))
                    currentTrack.data.pause()
                    onNextTrack()
                }
                else {
                    setPassedTime(currentTrack.data?.currentTime)
                    elRef.current.value = ((currentTrack.data?.currentTime / currentTrack.data.duration) * 100)
                }
            }
        }, 1000);
    }
    const onNextTrack = async () => {
        const nextTrack = playlistService.playNextTrack(playlistTracks, currentTrack.info.track_id)
        await dispatch(setCurrentTrackInfo(nextTrack))
        await dispatch(setCurrentTrackData(nextTrack.track_id, playlistInfo))
        await dispatch(setIsPlaying())
    }

    const skip = async () => {
        if(currentTrack?.data?.currentTime){
            console.log(currentTrack.data.currentTime);
            currentTrack.data.currentTime=30.323232 
            console.log(currentTrack.data.currentTime);
        }
        // await dispatch(skipTen())

    }

    const timeFormat = (time) => {
        if (isNaN(time) || !time) return

        var date = new Date(0);
        date.setSeconds(time); // specify value for SECONDS here
        var timeString = date.toISOString().substr(14, 5);
        return timeString
    }

    return (
        <section className="main-progress-bar">
            {/* <button onClick={() => { skip() }}>Skip</button> */}
            {/* <p>{timeFormat(passedTime)}</p> */}
            <progress ref={elRef} value="0" max="100">  </progress>
            {/* <p className="total-time" >{timeFormat(duration)}</p> */}
        </section >
    )
}
