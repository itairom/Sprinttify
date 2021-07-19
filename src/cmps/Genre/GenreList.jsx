import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { GenrePreview } from "./GenrePreview";

export const GenreList = ({ genres }) => {

    useEffect(() => {
        return ()=>{}
    },[genres] )


    return (
        <section className="genre-list">
            {genres?.map(genre =>
                <GenrePreview genre={genre} key={genre.category_name} />
            )}
        </section>

    )

}