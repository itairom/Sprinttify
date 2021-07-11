import React from "react"
import { useDispatch, } from "react-redux"
import { Link } from 'react-router-dom'
import { setPlaylistHeadrInfo } from '../actions/PlaylistAction'



export const PlayList = ({ playlist }) => {
    const dispatch = useDispatch()
    
    const onSetPlaylist = () => {
        dispatch(setPlaylistHeadrInfo(playlist))
    }

    const { playlist_id, name, description, image_url } = playlist
    return (
        <section key={playlist_id} className="playlist-card">
            <Link onClick={() => { onSetPlaylist() }} to={`/home/${playlist_id}`}>
                <img src={image_url} alt="img" />
                <div className="playlist-name">{name}</div >
                <p className="description">{description}</p>
            </Link>
        </section>
    )
}