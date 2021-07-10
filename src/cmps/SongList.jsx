import React, { useEffect } from "react";
import { SongPreview } from '../cmps/SongPreview'




const _SongList = ({ playlistTracks }) => {

    useEffect(()=>{
        // if(!playlistTracks) return
        console.log(playlistTracks);
    })
    

    return (
        <div className='song-list'>
            {playlistTracks&&playlistTracks?.map(song =>
                <SongPreview key={song.track_id} song={song} />
            )}
        </div>
    )
}
export const SongList = React.memo(_SongList)