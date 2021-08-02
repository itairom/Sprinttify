import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { setPlaylistHeadrInfo, setPlaylistTracks, setIsPlaying, setCurrentTrackInfo, setCurrentTrackData } from '../actions/PlaylistAction'
import { ReactComponent as PlaylistPlay } from '../assets/imgs/playlist-play.svg'
import { ReactComponent as PlaylistPause } from '../assets/imgs/playlist-pause.svg'

export const PlayList = ({ playlist }) => {
    const dispatch = useDispatch()
    const { isPlaying, currentTrack, playlistInfo, playlistTracks } = useSelector(state => state.playlistModule)
    const [localIsPlaying, setLocalIsPlaying] = useState(false)
    const { playlist_id, name, description, image_url } = playlist

    useEffect(() => {
        const onPlay = async () => {
            if (playlistTracks.length > 0) {
                if (playlist_id === playlistInfo?.playlist_id) {
                    onPlayFirstSong()
                }
            }
        }
        onPlay()
        return () => {
            setLocalIsPlaying(false)
        }
    }, [playlistInfo])

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

    const onSetPlaylist = () => {
        const loadPlaylist = async () => {
            await dispatch(setPlaylistTracks(playlist_id))
            await dispatch(setPlaylistHeadrInfo(playlist))
        }
        if (currentTrack.data) { //Play after song already loading
            dispatch(setIsPlaying(true))
            setLocalIsPlaying(true)
        }
        loadPlaylist()
    }

    const onPlayFirstSong = () => {
        const setCurrTrack = async () => {
            if (localIsPlaying) setLocalIsPlaying(false)
            if (isPlaying) dispatch(setIsPlaying(false))
            await dispatch(setCurrentTrackInfo(playlistTracks[0]))
            await dispatch(setCurrentTrackData(playlistTracks[0].track_id, playlistInfo))
            dispatch(setIsPlaying(true))
            setLocalIsPlaying(true)
        }
        setCurrTrack()
    }

    const OnPause = async () => {
        setLocalIsPlaying(false)
        await dispatch(setIsPlaying(false))
    }

    return (
        <section key={playlist_id} className="playlist-card">
            <div className="playlist-image">
                <img src={image_url} alt="img" />
                <div className="playlist-play">
                    {!localIsPlaying && <PlaylistPlay onClick={() => { onSetPlaylist() }} />}
                    {localIsPlaying && <PlaylistPause onClick={() => { OnPause() }} />}
                </div>
            </div>
            <Link onClick={() => { onSetPlaylist() }} to={`/home/${playlist_id}`}>
                <div className="playlist-name">{name}</div >
                <p className="description">{description}</p>
            </Link>
        </section>
    )
}