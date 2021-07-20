import React, { useEffect, useState } from 'react'
import { GenreList } from '../cmps/Genre/GenreList'
import { playlistService } from '../services/playlistService'

export const Browse = () => {

    const [genreList, setGenreList] = useState([])

    useEffect(() => {
        (async function () {
            const res = await playlistService.getGenreList()
            setGenreList(res)
        }())
    }, [])

    useEffect(() => {
        if (!genreList) return
    }, [genreList])

    return (
        <section className="main-container  browse-page">
            <h1>Genre</h1>
            <GenreList genres={genreList} />
        </section>
    )
}