import React, { useEffect, useState } from 'react'
import { setLikedPlaylist,setFilter } from '../actions/PlaylistAction'
import { useDispatch, useSelector } from "react-redux"
import { SongList } from '../cmps/SongList'
import { PlaylistHeader } from '../cmps/PlaylistHeader'
import { SongFilter } from '../cmps/SongFilter'

export const LikedSongs = () => {
    const dispatch = useDispatch()
    const { likedSongsPlaylist,filterBy } = useSelector(state => state.playlistModule)
    const [likedPlaylistObj, setLikedPlaylistObj] = useState({})

    
    useState(() => {
        setLikedPlaylistObj({ length: likedSongsPlaylist.length,name:'Liked Songs' })
    }, [likedSongsPlaylist])


    useEffect(() => {
        const loadPlaylist = async () => {
        dispatch(setLikedPlaylist(filterBy))
        }
        loadPlaylist()
    }, [filterBy])

    // useEffect(() => {
    //     const loadPlaylist = async () => {
    //         dispatch(setPlaylistTracks(id, filterBy))
    //     }
    //     loadPlaylist()
    // }, [filterBy])

    useEffect(() => {
    }, [likedSongsPlaylist])

    if (!likedSongsPlaylist) return
    return (
        <section className="main-container page liked-page">
            <SongFilter onSetFilter={(filterBy) => dispatch(setFilter(filterBy))} />
            <PlaylistHeader likedPlaylist={likedPlaylistObj} />
            <SongList playlistTracks={likedSongsPlaylist} />
        </section>
    )
}

