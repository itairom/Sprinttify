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
    likedSongsPlaylist: [],
    genres: [],
    browseGenre: null
}
export default function PlaylistReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_IS_PLAYING':
            return {
                ...state,
                isPlaying: action.isPlaying
            }
        case 'SET_BROWSE_GENRE':
            return {
                ...state,
                browseGenre: action.browseGenre
            }
        case 'SET_GENRE_LIST':
            return {
                ...state,
                genres: action.genres
            }
        case 'SET_LIKED_SONGS':
            const { liked_tracks } = action.likedSongsPlaylist
            return {
                ...state,
                likedSongsPlaylist: liked_tracks
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