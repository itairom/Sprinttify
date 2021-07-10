import { ReactComponent as Glass } from '../assets/imgs/magnify.svg'
import React, { useEffect } from 'react'
import { useForm } from '../services/customHooks'

export const SongFilter = ({ onSetFilter }) => {
    const [filterBy, handleChange] = useForm({
        songName: ''
    }, onSetFilter)

    useEffect(()=>{
        
    })
    const {songName}= filterBy

    return (
        <div className="filter-song">
            <Glass />
            <form onSubmit={ev => ev.preventDefault}>
                <input placeholder="Filter" type="text" name='songName' value={songName} onChange={handleChange} />
            </form>
        </div>
    )
}


