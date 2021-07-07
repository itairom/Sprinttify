import React from "react"

export const PlayList = () => {
    const playlistData={
        "description": "Listen to the best songs from the 60's",
        "image_url": "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
        "name": "Best of 60's",
        "playlistId": "3533"
      }

    return (
        <section key={playlistData.playlistId} className="playlist-card">
            <img src={playlistData.image_url} alt="img" />
            <div className="playlist-name">{playlistData.name}</div >
            <p className="description">{playlistData.description}</p>
        </section>
    )
}