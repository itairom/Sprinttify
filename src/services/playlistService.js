import { axiosService } from '../services/axiosService'



export const playlistService = {
    query,
    getPlaylistTracksById,
    getTrackData,
    notifyPlayedSong,
    playNextTrack,
    playPreviousTrack,
    setTrackLike,
    getLikedSongsPlaylist
}

async function query() {
    const playlists = []
    const featuredPlaylist = await axiosService.getFeaturedPlaylist()
    const moodPlaylist = await axiosService.getMoodPlaylist()
    const recentlyPlayedPlaylist = await axiosService.getRecentlyPlayedPlaylist()
    playlists.push(featuredPlaylist.playlists)
    playlists.push(recentlyPlayedPlaylist.playlists)
    playlists.push(moodPlaylist.playlists)
    return playlists
}

async function getPlaylistTracksById(id) {
    const tracks = await axiosService.getPlaylistTracks(id)
    return tracks
}

async function getTrackData(id) {
    const track = await axiosService.getPlaylingTrack(id)
    let audio = new Audio(track)
    audio.preload = 'metadata'
    audio.className = 'current-track'
    audio.crossOrigin = 'anonymous';
    const audioObj = { data: audio, url: track }
    return audioObj
}

async function notifyPlayedSong(playlistInfo, trackId) {
    await axiosService.notifyPlayedSong(playlistInfo.playlist_id, trackId)
}

function playNextTrack(playlist, trackId) {
    if (!trackId) return
    let nextTrack = null
    playlist.forEach((track, idx) => {
        if (track.track_id === trackId) {
            nextTrack = (playlist[idx + 1]);
        }
    })
    if (!nextTrack) return
    return nextTrack
}

function playPreviousTrack(playlist, trackId) {
    if (!trackId) return
    let previousTrack = null
    playlist.forEach((track, idx) => {
        if (track.track_id === trackId) {
            previousTrack = (playlist[idx - 1]);
        }
    })
    if (!previousTrack) return
    return previousTrack
}

async function setTrackLike(trackId, LiksStatus) {
    await axiosService.setTrackLike(trackId, LiksStatus)

}

async function getLikedSongsPlaylist() {
    const likedPlaylist = await axiosService.getLikedSongsPlaylist()
    return likedPlaylist
}



// const getEncryptedToken = (token) => {
//     let date = new Date();
//     let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
//     let stringToEncrypt = `${token}===${utcTime}`
//     return btoa(stringToEncrypt)
//   }

