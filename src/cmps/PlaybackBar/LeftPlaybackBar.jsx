
import React, { useEffect } from 'react'

export const LeftPlaybackBar = ({img}) => {

  useEffect(()=>{
      console.log(img);
  },[img])



    return (
        <section className="left-playback">
            <img src={img} alt="album-cover" />
            <div className="song-details">
                <p>Square One</p>
                <p>Coldplay</p>
            </div>
        </section>
    )
}