import React, { useCallback, useEffect, useState } from 'react'

import { useDispatch } from "react-redux"

export const Home = () => {
    const dispatch = useDispatch()

    return (
        <section className="main-container main-home">
            <h1>Home</h1>
        </section>
    )
}