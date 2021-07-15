import React, { useEffect, useState } from 'react'
import { SongList } from '../cmps/SongList'
import { getPlaylistTracks, setFilter } from '../actions/PlaylistAction'

import { PlaylistHeader } from '../cmps/PlaylistHeader'
import { SongFilter } from '../cmps/SongFilter'
import { useDispatch, useSelector } from 'react-redux'

export const PlayListPage = ({ match }) => {
    const dispatch = useDispatch()
    const { playlistTracks, playlistDuration, filterBy } = useSelector(state => state.playlistModule)
    const { id } = match.params

   
    useEffect(() => {
        const loadPlaylist = async () => {
            dispatch(getPlaylistTracks(id, filterBy))
        }
        loadPlaylist()
    }, [filterBy])


    return (
        <section className="main-container main-playlist">
            <SongFilter onSetFilter={(filterBy) => dispatch(setFilter(filterBy))} />
            <div className="playlist-head">
                <p className="head-title" >TITLE</p>
                <p className="head-artist" >ARTIST</p>
                <p className="head-album" >ALBUM</p>
                <p className="head-date" >DATE</p>
            </div>
            <PlaylistHeader playlistDuration={playlistDuration} />
            <SongList playlistTracks={playlistTracks} />
        </section>
    )
}