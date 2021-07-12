import React from 'react'
import { ReactComponent as Heart } from '../assets/imgs/heart.svg'
import { ReactComponent as Play } from '../assets/imgs/play-preview.svg'
import { setCurrentTrack } from '../actions/PlaylistAction'
import { useDispatch } from 'react-redux'

export const SongPreview = ({ song }) => {
    const dispatch = useDispatch()
    const txtSlice = (txt, length) => {
        return txt.slice(0, length) + '...'
    }

    const onSetCurrTrack = () => {
        dispatch(setCurrentTrack(song))
    }


    const { name, artists_names, album_name, release_date } = song
    return (
        <section className="song-card flex">
            <div className="preview-control">
                < Play onClick={() => { onSetCurrTrack() }} className="play-btn" />
            </div>
            <div className="heart-container">
                <Heart className="heart " />
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