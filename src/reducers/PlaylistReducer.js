const initialState = {
    featuredPlaylist: [],
    moodPlaylist: [],
    recentlyPlayedPlaylist: [],
    filterBy: null,
    playlistTracks: []
}
//SET_MOOD
//SET_RECENTLY
export default function PlaylistReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FEATURED':
            return {
                ...state,
                featuredPlaylist: action.featuredPlaylist.playlists
            }
        case 'SET_PLAYLIST_TRACKS':
            return {
                ...state,
                playlistTracks: action.tracks.tracks
            }
        default:
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }
            return state;
    }
}