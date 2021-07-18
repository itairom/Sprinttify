import React, { useEffect, useRef } from "react"

export const GenrePreview = ({ genre }) => {

    const elRef = useRef()

    useEffect(() => {
        elRef.current.style.backgroundImage = `url(${genre.image_url})`
    }, [genre])

    return (
        <section ref={elRef} className="genre-preview">
            <p>{genre.category_name}</p>
        </section>
    )

}