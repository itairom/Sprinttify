import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { PlayListCarousel } from '../cmps/PlayListCarousel'
import { playlistService } from '../services/playlistService'
import { loadFeatured } from '../actions/PlaylistAction'
import { axiosService } from '../services/axiosService'
export const Home = () => {

    const dispatch = useDispatch()
    const [test, setTest] = useState('')
    const [playlists, setPlaylists] = useState([])
    const { filterBy } = useSelector(state => state.playlistModule)

    // useEffect(() => {
    //     dispatch(loadFeatured())
    // }, [])

    useEffect(async () => {
        const res = await playlistService.query()
        setPlaylists(res)
        return ()=>{}
    },[])

    useEffect(() => {
        console.log(playlists);
        return ()=>{}
    }, [playlists])

    return (
        <section className="main-container main-home">
            <PlayListCarousel playlists={playlists[0]} key="featuredPlaylist" playlistName="Featured Playlists" />
            <PlayListCarousel playlists={playlists[1]} key="Recently Played" playlistName="Recently Played" />
            <PlayListCarousel playlists={playlists[2]} key="Mood" playlistName="Mood" />
        </section>
    )
}