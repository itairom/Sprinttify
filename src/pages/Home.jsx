import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { PlayList } from '../cmps/PlayList'
import { PlayListCarousel } from '../cmps/PlayListCarousel'
import { playlistService } from '../services/playlistService'

export const Home = () => {
    const dispatch = useDispatch()

     useEffect(async() => {
        let resp = await playlistService.apiTest()
        console.log("🚀 ~ file: Home.jsx ~ line 12 ~ useEffect ~ resp", resp)
    })

    return (
        <section className="main-container main-home">
            <PlayListCarousel playlistName="Recently Played" />
            <PlayListCarousel playlistName="Featured Playlists" />
            <PlayListCarousel playlistName="Mood" />
        </section>
    )
}