import React, { useCallback, useEffect, useState } from 'react'
import { SongList } from '../cmps/SongList'
import { getPlaylistTracks, setFilter } from '../actions/PlaylistAction'

import { PlaylistHeader } from '../cmps/PlaylistHeader'
import { SongFilter } from '../cmps/SongFilter'
import { useDispatch, useSelector } from 'react-redux'

export const PlayListPage = ({ match }) => {
    const dispatch = useDispatch()
    const { playlistTracks, filterBy } = useSelector(state => state.playlistModule)
    const { id } = match.params

    const [localPlaylistTracks, setLocalPlaylistTracks] = useState('')
    

    useEffect(() => {
        console.log('filtering');

    }, [filterBy])
    useEffect(() => {
        const loadPlaylist = async () => {
            dispatch(getPlaylistTracks(id))
            if (playlistTracks) {
                setLocalPlaylistTracks(playlistTracks)
            }
            // else return
        }
        loadPlaylist()

    }, [])

    return (
        <section className="main-container main-playlist">

            <SongFilter onSetFilter={(filterBy) => dispatch(setFilter(filterBy))} />
            <div className="playlist-head">
                <p className="head-title" >TITLE</p>
                <p className="head-artist" >ARTIST</p>
                <p className="head-album" >ALBUM</p>
                <p className="head-date" >DATE</p>
            </div>
            <PlaylistHeader />
            <SongList playlistTracks={localPlaylistTracks} />
        </section>
    )
}