
import React from 'react'
import { ReactComponent as Heart } from '../assets/imgs/heart.svg'

export const SongPreview = ({ song }) => {



    return (
        <section className="song-card flex">
            <Heart className= "heart" />
            <p className="song-title">{song.name}</p>
            <p className="song-album" >{song.album_name}</p>
            <p className="song-artist" >{song.artists_names}</p>
            <p className="song-date" >{song.release_date}</p>
        </section>
    )


}