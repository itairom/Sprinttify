import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { setPlaylistHeadrInfo } from '../actions/PlaylistAction'
import { ReactComponent as PlaylistPlay } from '../assets/imgs/playlist-play.svg'
import { ReactComponent as PlaylistPause } from '../assets/imgs/playlist-pause.svg'


export const PlayList = ({ playlist }) => {
    const dispatch = useDispatch()
    const [isPlaying, setIsPlaying] = useState(false)

    const onSetPlaylist = () => {
        dispatch(setPlaylistHeadrInfo(playlist))
    }

    const { playlist_id, name, description, image_url } = playlist

    return (
        <section key={playlist_id} className="playlist-card">
            <Link onClick={() => { onSetPlaylist() }} to={`/home/${playlist_id}`}>
                <div className="playlist-image">
                    <img src={image_url} alt="img" />
                    <div className="playlist-play">
                        {<PlaylistPlay onClick={()=>{}} />}
                        {<PlaylistPause />}
                    </div>
                </div>
                <div className="playlist-name">{name}</div >
                <p className="description">{description}</p>
            </Link>
        </section>
    )
}