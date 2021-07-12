import React, { useEffect } from 'react'
import { ReactComponent as Heart } from '../assets/imgs/heart.svg'
import { ReactComponent as Play } from '../assets/imgs/play-preview.svg'
import { ReactComponent as Pause } from '../assets/imgs/pause-preview.svg'
import { setCurrentTrack,setIsPlaying} from '../actions/PlaylistAction'
import { useDispatch, useSelector } from 'react-redux'

export const SongPreview = ({ song }) => {
    const dispatch = useDispatch()
    const { isPlaying } = useSelector(state => state.playlistModule)

    const txtSlice = (txt, length) => {
        return txt.slice(0, length) + '...'
    }

    const onSetCurrTrack = () => {
        dispatch(setCurrentTrack(song))
        dispatch(setIsPlaying())
    }

    useEffect(()=>{
        console.log(isPlaying);
    },[isPlaying])
    

    const { name, artists_names, album_name, release_date } = song
    return (
        <section className="song-card flex">
            <div className="preview-control">
                {!isPlaying && < Play onClick={() => { onSetCurrTrack() }} className="play-btn" />}
                {isPlaying && < Pause onClick={() => { onSetCurrTrack() }} className="play-btn" />}
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