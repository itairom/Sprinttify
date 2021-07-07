import React, { useCallback, useEffect, useState } from 'react'

import { useDispatch } from "react-redux"

export const Browse = () => {
    const dispatch = useDispatch()

    return (
        <section className="main-container main-browse">
            <h1>Browse</h1>
        </section>
    )
}