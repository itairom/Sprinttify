import React, { useEffect, useState } from 'react'
import { playlistService } from '../services/playlistService'
import { PlayListCarousel } from '../cmps/PlayListCarousel'
import { useSelector } from 'react-redux'
import { PlaylistHeader } from '../cmps/PlaylistHeader'

export const GenrePage = ({ match, props }) => {

    const [playlists, setPlaylists] = useState([])
    const { id } = match.params
    const { browseGenre } = useSelector(state => state.playlistModule)

    useEffect(() => {
        if (!id) return
        const getPlaylists = async () => {
            const res = await playlistService.getGenrePlayslists(id)
            setPlaylists(res.playlists)
        }
        getPlaylists()
    }, [])


    return (
        <section className="main-container page genre-page">
            <h1>Genre</h1>
            <div className="genre-playlists">
                <PlaylistHeader genreLength={playlists.length} genre={browseGenre} />
                {<PlayListCarousel playlists={playlists} playlistName={browseGenre} />}
            </div>
        </section>
    )
}