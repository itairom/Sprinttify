import React, { useCallback, useEffect, useState } from 'react'

import { useDispatch } from "react-redux"

export const LikedSongs = () => {
    const dispatch = useDispatch()

    return (
        <section className="main-container main-liked">
            <h1>LikedSongs</h1>
        </section>
    )
}