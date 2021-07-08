import React, { useCallback, useEffect, useState } from 'react'


export const PlaylistHeader = ({pkaylist}) => {

    return (
        <nav className="playlist-header flex">
            <div className="left-header flex">
                <p className="header-title">Saturday Morning Can’t Be Better</p>
                <p className="header-desc">Start off your saturday with great tunes</p>
            </div>
            <div className="right-header flex">
                <p>50 songs</p>
                <p>2 hr 30 min</p>
            </div>
        </nav>
    )
}