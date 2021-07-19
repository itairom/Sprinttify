import React, { useEffect, useState } from 'react'
import { PlayListCarousel } from '../cmps/PlayListCarousel'
import { playlistService } from '../services/playlistService'
export const Home = () => {

    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        (async function () {
            const res = await playlistService.query()
            setPlaylists(res)
        }())
    }, [])

    return (
        <section className="main-container main-home">
            <PlayListCarousel playlists={playlists[0]} key="featuredPlaylist" playlistName="Featured Playlists" />
            <PlayListCarousel playlists={playlists[1]} key="RecentlyPlayed" playlistName="Recently Played" />
            <PlayListCarousel playlists={playlists[2]} key="Mood" playlistName="Mood" />
        </section>
    )
}