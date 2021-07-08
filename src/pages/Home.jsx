import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { PlayList } from '../cmps/PlayList'
import { PlayListCarousel } from '../cmps/PlayListCarousel'

export const Home = () => {
    const dispatch = useDispatch()

    return (
        <section className="main-container main-home">
            <PlayListCarousel />
        </section>
    )
}