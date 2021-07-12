const initialState = {
    featuredPlaylist: [],
    moodPlaylist: [],
    recentlyPlayedPlaylist: [],
    filterBy: null,
    playlistTracks: [],
    playlistDuration: null,
    headerInfo: null,
    currentTrack: null,
    isPlaying: false
}
export default function PlaylistReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_IS_PLAYING':
            return {
                ...state,
                isPlaying: !state.isPlaying
            }
        case 'SET_PLAYING':
            return {
                ...state,
                featuredPlaylist: action.featuredPlaylist.playlists
            }
        case 'SET_CURRENT_TRACK':
            return {
                ...state,
                currentTrack: action.track
            }
        case 'SET_PLAYLIST_TRACKS':
            return {
                ...state,
                playlistTracks: action.tracks
            }
        case 'SET_PLAYLIST_DURATION':
            return {
                ...state,
                playlistDuration: action.tracks
            }
        case 'SET_PLAYLIST_HEADER':
            return {
                ...state,
                headerInfo: action.headerInfo
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }
        default:
            return state;
    }
}