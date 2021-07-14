const initialState = {
    featuredPlaylist: [],
    moodPlaylist: [],
    recentlyPlayedPlaylist: [],
    filterBy: null,
    playlistTracks: [],
    playlistDuration: null,
    playlistInfo: null,
    currentTrack: { info: null, data: null },
    isPlaying: false,
    // track: new Audio("https://api.sprintt.co/music/play/1371?access=MWU2YmU3ODItMDYwMC00YjMyLTk2NzQtNWE0NDg4YWU2Y2Q0PT09MTI6NTY6MzA=")
    
}
export default function PlaylistReducer(state = initialState, action) {
    switch (action.type) {

        case 'SET_IS_PLAYING':
            return {
                ...state,
                isPlaying: action.isPlaying
            }
        case 'SET_PLAYING':
            return {
                ...state,
                featuredPlaylist: action.featuredPlaylist.playlists
            }
        case 'SET_CURRENT_TRACK':
            return {
                ...state, currentTrack: { ...state.currentTrack, info: action.track }
            }
        case 'SET_CURRENT_TRACK_DATA':
            return {
                ...state, currentTrack: { ...state.currentTrack, data: action.trackData.data, url: action.trackData.url }
            }
        case 'SKIP_TEN':
            return {
                //Data is state.currentTrack.data.currentTime 
                ...state, currentTrack: {
                    ...state.currentTrack, data: {
                        ...state.currentTrack.data, currentTime: 0.7
                    }
                }
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
                playlistInfo: action.playlistInfo
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