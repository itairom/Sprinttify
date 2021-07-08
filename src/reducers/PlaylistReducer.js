const initialState = {
    featuredPlaylist: [],
    mooddPlaylist: [],
    recentlyPlayedPlaylist: [],
    filterBy: null
}

export default function PlaylistReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FEATURED':
            console.log(action.featuredPlaylist);
            return {
                ...state,
                featuredPlaylist: action.featuredPlaylist
            }
        default:
            return state;
    }
}