import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
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
        // const params = { id:category_id, name:category_name}
        // const query = new URLSearchParams(params)
        dispatch(setBrowseGenre(genre))
        history.push(`/browse/${category_id}`)

    }

    return (
        // <Link to={`/browse/${genre.category_name}?${genre.category_id}`} >
        <section onClick={() => { onSubmit() }} ref={elRef} className="genre-preview">
            <p>{genre.category_name}</p>
        </section>
        // </Link>
    )

}