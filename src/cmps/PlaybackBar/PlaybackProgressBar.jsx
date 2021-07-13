
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

export const PlaybackProgressBar = () => {

    const elRef = useRef();

    const { currentTrack } = useSelector(state => state.playlistModule)
    const [passedTime, setPassedTime] = useState(null)
    const [currTime, setCurrTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {

        console.log('new');
        console.log(currentTrack.data);


        if (!isNaN(currentTrack?.data?.duration)) {
            setDuration(currentTrack?.data?.duration)
        }
        const interval = setInterval(passedTimeInterval, 1000);
        return () => {
            clearInterval(interval)
            console.log('clear interval');

        }
    }, [currentTrack?.data?.duration])

    const passedTimeInterval = () => {
        setInterval(() => {
            if (currentTrack.data?.currentTime) {
                setPassedTime(currentTrack.data?.currentTime)
                elRef.current.value = ((currentTrack.data?.currentTime / currentTrack.data.duration) * 100)
            }
        }, 1000);
    }

    const timeFormat = (time) => {
        var date = new Date(0);
        date.setSeconds(time); // specify value for SECONDS here
        var timeString = date.toISOString().substr(14, 5);

        return timeString
    }

    // (Time passed in seconds / Song duration in seconds) X 100

    return (
        <section className="main-progress-bar">
                <p>{timeFormat(passedTime)}</p>
            <progress ref={elRef} value="0" max="100">  </progress>
                <p className="total-time" >{timeFormat(duration)}</p>
        </section>
    )
}
