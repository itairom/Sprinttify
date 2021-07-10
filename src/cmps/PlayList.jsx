import React, { useEffect } from "react"
import { Link } from 'react-router-dom'


export const PlayList = ({ playlist }) => {

    const { playlist_id, name, description, image_url } = playlist
    return (
        <section key={playlist_id} className="playlist-card">
            <Link  to={`/home/${playlist_id}`}>
                <img src={image_url} alt="img" />
                <div className="playlist-name">{name}</div >
                <p className="description">{description}</p>
            </Link>
        </section>
    )
}