import { axiosService } from "../services/axiosService";

// Dispatchers
const _setFeaturedPlaylist = (featuredPlaylist) => ({ type: 'SET_FEATURED', featuredPlaylist });
const _setMoodPlaylist = (moodPlaylist) => ({ type: 'SET_MOOD', moodPlaylist });
const _setRecentlyPlayedPlaylist = (recentlyPlayedPlaylist) => ({ type: 'SET_RECENTLY', recentlyPlayedPlaylist });
const _setPlaylistTracks = (tracks) => ({ type: 'SET_PLAYLIST_TRACKS', tracks });
const _setFilter = (filterBy) => ({ type: 'SET_FILTER', filterBy });

// THUNK
export function loadFeatured() {
    return async (dispatch) => {
        const featuredPlaylist = await axiosService.getFeaturedPlaylist();
        dispatch(_setFeaturedPlaylist(featuredPlaylist));
    }
}
export function loadMood() {
    return async (dispatch) => {
        const moodPlaylist = await axiosService.getMoodPlaylist();
        dispatch(_setMoodPlaylist(moodPlaylist));
    }
}
export function loadRecentlyPlayed() {
    return async (dispatch) => {
        const recentlyPlayedPlaylist = await axiosService.getRecentlyPlayedPlaylist();
        dispatch(_setRecentlyPlayedPlaylist(recentlyPlayedPlaylist));
    }
}
export function getPlaylistTracks(id) {
    return async (dispatch) => {
        const tracks = await axiosService.getPlaylistTracks(id);
        dispatch(_setPlaylistTracks(tracks));
    }
}
export function setFilter(filterBy) {
    return (dispatch) => dispatch(_setFilter(filterBy))
}