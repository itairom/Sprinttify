import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { PlayListCarousel } from '../cmps/PlayListCarousel'
import { playlistService } from '../services/playlistService'
import { loadFeatured } from '../actions/PlaylistAction'
export const Home = () => {

    const dispatch = useDispatch()
    const [playlists, setPlaylists] = useState([])
    const { filterBy, featuredPlaylist } = useSelector(state => state.playlistModule)

    // useEffect(() => {
    //     dispatch(loadFeatured(filterBy))
    // }, [filterBy])

    // useEffect(() => {
    //     console.log(featuredPlaylist);
    // }, [featuredPlaylist])

    useEffect(() => {
        (async function () {
            const res = await playlistService.query()
            setPlaylists(res)
        }())
    }, [])

    useEffect(() => {
        console.log(playlists);
        return () => { }
    }, [playlists])

    return (
        <section className="main-container main-home">
            <PlayListCarousel playlists={playlists[0]} key="featuredPlaylist" playlistName="Featured Playlists" />
            <PlayListCarousel playlists={playlists[1]} key="RecentlyPlayed" playlistName="Recently Played" />
            <PlayListCarousel playlists={playlists[2]} key="Mood" playlistName="Mood" />
        </section>
    )
}