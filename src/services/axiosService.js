import axios from 'axios'

const TOKEN = '1e6be782-0600-4b32-9674-5a4488ae6cd4';

export const axiosService = {
    getFeaturedPlaylist,
    getMoodPlaylist,
    getRecentlyPlayedPlaylist,
    getPlaylistTracks,
    getPlaylingTrack,
    notifyPlayedSong
}

async function getFeaturedPlaylist() {
    try {
        const resp = await axios.get('https://api.sprintt.co/music/featured_playlists', options)
        return resp.data
    }
    catch (err) {
        throw err
    }
}
async function getMoodPlaylist() {
    try {
        const resp = await axios.get('https://api.sprintt.co/music/mood_playlists', options)
        return resp.data
    }
    catch (err) {
        throw err
    }
}

async function getRecentlyPlayedPlaylist() {
    try {
        const resp = await axios.get('https://api.sprintt.co/music/recently_played_playlists', options)
        return resp.data
    }
    catch (err) {
        throw err
    }
}
async function getPlaylistTracks(id) {
    try {
        const resp = await axios.get(`https://api.sprintt.co/music/playlist_tracks/${id}`, options)
        return resp.data
    }
    catch (err) {
        throw err
    }
}

async function getPlaylingTrack(trackId) {
    try {
        const encryptedToken = getEncryptedToken(TOKEN)
        const resp = await axios.get(`https://api.sprintt.co/music/play/${trackId}?access=${encryptedToken}`)
        return resp.config.url
    }
    catch (err) {
        throw err
    }
}
async function notifyPlayedSong(playListId, trackId) {
    try {
        const encryptedToken = getEncryptedToken(TOKEN)
    }
    catch (err) {
        throw err
    }
}



const getEncryptedToken = (token) => {
    let date = new Date();
    let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
    let stringToEncrypt = `${token}===${utcTime}`
    return btoa(stringToEncrypt)
}


const options = {
    headers: { 'user-access-token': `${TOKEN}` }
};

