import { axiosService } from '../services/axiosService'



export const playlistService = {
    query,
    getPlaylistTracksById,
    getTrackData,
    notifyPlayedSong
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
    audio.crossOrigin='anonymous';
    return audio
}

async function notifyPlayedSong(playlistInfo,trackId) {
    console.log("🚀 ~ file: playlistService.js ~ line 36 ~ notifyPlayedSong ~ trackId", trackId)
    console.log("🚀 ~ file: playlistService.js ~ line 36 ~ notifyPlayedSong ~ playlistInfo", playlistInfo)
    // const track =
     await axiosService.notifyPlayedSong(playlistInfo.playlist_id,trackId)
}






// const getEncryptedToken = (token) => {
//     let date = new Date();
//     let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
//     let stringToEncrypt = `${token}===${utcTime}`
//     return btoa(stringToEncrypt)
//   }

