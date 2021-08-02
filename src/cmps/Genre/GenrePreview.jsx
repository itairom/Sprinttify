import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import {  useHistory } from "react-router-dom"
import { setBrowseGenre } from '../../actions/PlaylistAction'


export const GenrePreview = ({ genre }) => {
    const elRef = useRef()
    const dispatch = useDispatch()

    let history = useHistory();
    const { category_id, category_name } = genre
    useEffect(() => {
        elRef.current.style.backgroundImage = `url(${genre.image_url})`
    }, [genre])

    const onSubmit = () => {
        dispatch(setBrowseGenre(genre))
        history.push(`/browse/${category_id}`)

    }

    return (
        <section onClick={() => { onSubmit() }} ref={elRef} className="genre-preview">
            <p>{genre.category_name}</p>
        </section>
    )

}