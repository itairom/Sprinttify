import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { setPlaylistHeadrInfo, getPlaylistTracks, setIsPlaying, setCurrentTrackInfo, setCurrentTrackData } from '../actions/PlaylistAction'
import { ReactComponent as PlaylistPlay } from '../assets/imgs/playlist-play.svg'
import { ReactComponent as PlaylistPause } from '../assets/imgs/playlist-pause.svg'


export const PlayList = ({ playlist }) => {
    const dispatch = useDispatch()
    const { isPlaying, currentTrack, playlistInfo, playlistTracks } = useSelector(state => state.playlistModule)
    const [localIsPlaying, setLocalIsPlaying] = useState(false)

    const onSetPlaylist = () => {
        dispatch(setPlaylistHeadrInfo(playlist))
    }
    const { playlist_id, name, description, image_url } = playlist

    useEffect(() => {
        if (playlistTracks.length > 0) {
            if (playlist_id === playlistInfo?.playlist_id) {
                const setCurrTrack = async () => {
                    await dispatch(setCurrentTrackInfo(playlistTracks[0]))
                    await dispatch(setCurrentTrackData(playlistTracks[0].track_id, playlistInfo))
                     dispatch(setIsPlaying(true))
                    setLocalIsPlaying(true)
                }
                setCurrTrack()
            }
        }
        return () => { }
    }, [playlistInfo])

    // useEffect(() => {
    //     console.log(currentTrack.data);
    //     if (currentTrack.data) {
    //         if (isPlaying) {
    //             currentTrack.data.play()
    //             console.log('PLAY ');  
    //         }
    //         else {
    //             currentTrack.data.pause()
    //         }
    //     }
    // }, [isPlaying])

    const onPlayFirstSong = () => {
        console.log('onPlayFirstSong()');
        const loadPlaylist = async () => {
            await dispatch(getPlaylistTracks(playlist_id))
            await dispatch(setPlaylistHeadrInfo(playlist))
        }
        loadPlaylist()
    }



    return (
        <section key={playlist_id} className="playlist-card">
            <div className="playlist-image">
                <img src={image_url} alt="img" />
                <div className="playlist-play">
                    {!localIsPlaying && <PlaylistPlay onClick={() => { onPlayFirstSong() }} />}
                    {localIsPlaying && <PlaylistPause />}
                </div>
            </div>
            <Link onClick={() => { onSetPlaylist() }} to={`/home/${playlist_id}`}>
                <div className="playlist-name">{name}</div >
                <p className="description">{description}</p>
            </Link>
        </section>
    )
}