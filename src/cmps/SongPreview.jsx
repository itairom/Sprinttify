
import React from 'react'
import { ReactComponent as Heart } from '../assets/imgs/heart.svg'
import { ReactComponent as Play } from '../assets/imgs/play-preview.svg'
import { LongTxt } from './LongTxt'
export const SongPreview = ({ song }) => {


    const {name,artists_names,album_name,release_date}=song
    return (
        <section className="song-card flex">
            <div className="preview-control">
                < Play className="play-btn" />
            </div>
            <div className="heart-container">
                <Heart className="heart " />
            </div>
            {/* <img src="imgs/liked_songs_icon.png" className="heart" /> */}
            <p className="song-title cell">{name.length > 30 ? name.slice(0, 30)+'...' : name}</p>
            <p className="song-artist cell" >
                <LongTxt txt={artists_names} />
            </p>
            <p className="song-album cell" >
                <LongTxt txt={album_name} />
            </p>
            <p className="song-date cell" >
                {release_date}
            </p>
        </section>
    )


}