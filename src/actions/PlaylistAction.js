import { axiosService } from "../services/axiosService";

// Dispatchers
const _setFeaturedPlaylist = (featuredPlaylist) => ({ type: 'SET_FEATURED', featuredPlaylist });
const _setMoodPlaylist = (moodPlaylist) => ({ type: 'SET_MOOD', moodPlaylist });
const _setRecentlyPlayedPlaylist = (recentlyPlayedPlaylist) => ({ type: 'SET_RECENTLY', recentlyPlayedPlaylist });
const _setPlaylistTracks = (tracks) => ({ type: 'SET_PLAYLIST_TRACKS', tracks });
const _setPlaylistDuration = (tracks) => ({ type: 'SET_PLAYLIST_DURATION', tracks });
const _setFilter = (filterBy) => ({ type: 'SET_FILTER', filterBy });
const _setPlaylistHeadrInfo = (headerInfo) => ({ type: 'SET_PLAYLIST_HEADER', headerInfo });
const _setCurrentTrack = (track) => ({ type: 'SET_CURRENT_TRACK', track });


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
export function setPlaylistHeadrInfo(headerInfo) {
    return async (dispatch) => {
        dispatch(_setPlaylistHeadrInfo(headerInfo));
    }
}
export function setCurrentTrack(track) {
    return async (dispatch) => {
        dispatch(_setCurrentTrack(track));
    }
}
export function getPlaylistTracks(id, filterBy) {
    return async (dispatch) => {
        const tracks = await axiosService.getPlaylistTracks(id);
        let localFilterd = tracks.tracks
        if (filterBy) {
            const regex = new RegExp(filterBy.songName, 'i');
            localFilterd = tracks.tracks.filter((track) => regex.test(track.name));
            dispatch(_setPlaylistTracks(localFilterd));
            dispatch(_setPlaylistDuration(tracks.playlist_duration));

        }
        dispatch(_setPlaylistTracks(localFilterd));
        dispatch(_setPlaylistDuration(tracks.playlist_duration));
    }
}
export function setFilter(filterBy) {
    return (dispatch) => dispatch(_setFilter(filterBy))
}