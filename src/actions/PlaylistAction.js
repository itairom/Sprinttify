import { axiosService } from "../services/axiosService";
import { playlistService } from "../services/playlistService";

// Dispatchers
const _setFeaturedPlaylist = (featuredPlaylist) => ({ type: 'SET_FEATURED', featuredPlaylist });
const _setMoodPlaylist = (moodPlaylist) => ({ type: 'SET_MOOD', moodPlaylist });
const _setRecentlyPlayedPlaylist = (recentlyPlayedPlaylist) => ({ type: 'SET_RECENTLY', recentlyPlayedPlaylist });
const _setPlaylistTracks = (tracks) => ({ type: 'SET_PLAYLIST_TRACKS', tracks });
const _setPlaylistDuration = (tracks) => ({ type: 'SET_PLAYLIST_DURATION', tracks });
const _setFilter = (filterBy) => ({ type: 'SET_FILTER', filterBy });
const _setPlaylistHeadrInfo = (playlistInfo) => ({ type: 'SET_PLAYLIST_HEADER', playlistInfo });
const _setIsPlaying = (isPlaying) => ({ type: 'SET_IS_PLAYING', isPlaying });
const _setCurrentTrack = (track) => ({ type: 'SET_CURRENT_TRACK', track });
const _setCurrentTrackData = (trackData) => ({ type: 'SET_CURRENT_TRACK_DATA', trackData });
const _skipTen = () => ({ type: 'SKIP_TEN' });
const _setLikedPlaylist = (likedSongsPlaylist) => ({ type: 'SET_LIKED_SONGS', likedSongsPlaylist })

// THUNK
export function setIsPlaying(isPlaying) {
    return async (dispatch) => {
        dispatch(_setIsPlaying(isPlaying));
    }
}
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
export function setPlaylistHeadrInfo(playlistInfo) {
    return async (dispatch) => {
        dispatch(_setPlaylistHeadrInfo(playlistInfo));
    }
}
export function setLikedPlaylist() {
    return async (dispatch) => {
        const likedSongsPlaylist = await playlistService.getLikedSongsPlaylist()
        dispatch(_setLikedPlaylist(likedSongsPlaylist));
    }
}
export function setCurrentTrackInfo(track) {
    return async (dispatch) => {
        dispatch(_setCurrentTrack(track));
    }
}
export function setCurrentTrackData(trackId, playlistInfo) {
    return async (dispatch) => {
        let trackData = await playlistService.getTrackData(trackId)
        // await playlistService.notifyPlayedSong(playlistInfo,trackId) // NOTIFY 
        dispatch(_setCurrentTrackData(trackData));
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
export function skipTen() {
    return (dispatch) => dispatch(_skipTen())
}