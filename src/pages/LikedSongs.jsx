import React, { useEffect, useState } from 'react'
import { setLikedPlaylist } from '../actions/PlaylistAction'
import { useDispatch, useSelector } from "react-redux"
import { SongList } from '../cmps/SongList'
import { PlaylistHeader } from '../cmps/PlaylistHeader'

export const LikedSongs = () => {
    const dispatch = useDispatch()
    const { likedSongsPlaylist } = useSelector(state => state.playlistModule)
    const [likedPlaylistObj, setLikedPlaylistObj] = useState({})

    useState(() => {
        setLikedPlaylistObj({ length: likedSongsPlaylist.length,name:'Liked Songs' })
    }, [likedSongsPlaylist])


    useEffect(() => {
        dispatch(setLikedPlaylist())
        return () => { }
    }, [])

    useEffect(() => {
    }, [likedSongsPlaylist])

    if (!likedSongsPlaylist) return
    return (
        <section className="main-container main-liked">
            <PlaylistHeader likedPlaylist={likedPlaylistObj} />
            <SongList playlistTracks={likedSongsPlaylist} />
        </section>
    )
}

