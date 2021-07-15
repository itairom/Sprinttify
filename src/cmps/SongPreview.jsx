import React, { useEffect, useState } from 'react'
import { ReactComponent as Heart } from '../assets/imgs/heart.svg'
import { ReactComponent as FilledHeart } from '../assets/imgs/filled-heart.svg'
import { ReactComponent as Play } from '../assets/imgs/play-preview.svg'
import { ReactComponent as Pause } from '../assets/imgs/pause-preview.svg'
import { setCurrentTrackInfo, setIsPlaying, setCurrentTrackData } from '../actions/PlaylistAction'
import { useDispatch, useSelector } from 'react-redux'
import { playlistService } from '../services/playlistService'

export const SongPreview = ({ song }) => {
    const dispatch = useDispatch()
    const { isPlaying, currentTrack, playlistInfo } = useSelector(state => state.playlistModule)
    const [localIsPlaying, setLocalIsPlaying] = useState(false)
    const [isLiking, setIsLiking] = useState(null)

    const { name, artists_names, album_name, release_date, is_liked, track_id } = song

    const txtSlice = (txt, length) => {
        return txt.slice(0, length) + '...'
    }

    useEffect(() => {
        const status = (is_liked === 1) ? true : false

        setIsLiking(status)
    }, [])


    useEffect(() => {
        if (currentTrack.data) {
            if (isPlaying) {
                // console.log('play');
                currentTrack.data.play()
            }
            else {
                // console.log('pause');
                currentTrack.data.pause()
            }
        }
    }, [isPlaying])

    const onSetCurrTrack = async (playStatus) => {
        if (!currentTrack.info) { // Load first song
            await dispatch(setCurrentTrackInfo(song))
            await dispatch(setCurrentTrackData(song.track_id, playlistInfo))
            setLocalIsPlaying(true)
            await dispatch(setIsPlaying(true))
        }

        else if (song !== currentTrack.info) { // Load osher song
            setLocalIsPlaying(true) //check
            await dispatch(setIsPlaying(false))
            await dispatch(setCurrentTrackInfo(song))
            await dispatch(setCurrentTrackData(song.track_id, playlistInfo))
            await dispatch(setIsPlaying(true))
            setLocalIsPlaying(true)
        }

        else { // Pause / Play
            if (playStatus) {
                setLocalIsPlaying(true)
                await dispatch(setIsPlaying(true))
            }
            else {
                setLocalIsPlaying(false)
                await dispatch(setIsPlaying(false))

            }
        }
    }


    const onSetLike = (status) => {
        playlistService.setTrackLike(track_id, status)
        const statusBool = (status === 1) ? true : false

        setIsLiking(statusBool)
    }

    return (
        <section className="song-card flex">
            <div className="preview-control">
                {!localIsPlaying && < Play onClick={() => { onSetCurrTrack(true) }} className="play-btn" />}
                {localIsPlaying && < Pause onClick={() => { onSetCurrTrack(false) }} className="play-btn" />}
            </div>
            <div className="heart-container">
                {(isLiking === false) && <Heart onClick={() => { onSetLike(1) }} className="heart " />}
                {(isLiking === true) && <FilledHeart onClick={() => { onSetLike(0) }} className="heart " />}
                {/* {(is_liked===0 ) && <Heart onClick={() => { onSetLike(1) }} className="heart " />}
                {(is_liked ===1) && <FilledHeart onClick={() => { onSetLike(0) }} className="heart " />} */}
            </div>
            <p className="song-title cell">{name.length > 30 ? txtSlice(name, 30) : name}</p>
            <p className="song-artist cell" >
                {artists_names.length > 15 ? txtSlice(artists_names, 15) : artists_names}
            </p>
            <p className="song-album cell" >
                {album_name.length > 15 ? txtSlice(album_name, 15) : album_name}
            </p>
            <p className="song-date cell" >
                {release_date}
            </p>
        </section>
    )


}