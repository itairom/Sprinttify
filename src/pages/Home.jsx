import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { PlayList } from '../cmps/PlayList'
import { PlayListCarousel } from '../cmps/PlayListCarousel'
import { playlistService } from '../services/playlistService'

export const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        playlistService.apiTest()
    })

    return (
        <section className="main-container main-home">
            <PlayListCarousel playlistName="Recently Played"/>
            <PlayListCarousel playlistName="Featured Playlists"/>
            <PlayListCarousel playlistName="Mood"/>
        </section>
    )
}