import axios from 'axios'

const TOKEN = '1e6be782-0600-4b32-9674-5a4488ae6cd4';


export const axiosService = {
    getFeaturedPlaylist,
    getMoodPlaylist,
    getRecentlyPlayedPlaylist,
    setPlaylistTracks,
    getPlaylingTrack,
    notifyPlayedSong,
    setTrackLike,
    getLikedSongsPlaylist,
    getGenreList,
    getGenrePlayslists
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
async function setPlaylistTracks(id) {
    try {
        const resp = await axios.get(`https://api.sprintt.co/music/playlist_tracks/${id}`, options)
        return resp.data
    }
    catch (err) {
        throw err
    }
}

async function getLikedSongsPlaylist() {
    try {
        const resp = await axios.get(`https://api.sprintt.co/music/liked_tracks?limit=100`, options)
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

async function setTrackLike(trackId, LiksStatus) {
    const status = (LiksStatus === 1) ? true : false
    try {
        await axios.post(`https://api.sprintt.co/music/liked_tracks/${trackId}?status=${status}`, null, options)
    }
    catch (err) {
        throw err
    }
}

async function notifyPlayedSong(playlistId, trackId) {
    try {
        await axios.post(`https://api.sprintt.co/music/liked_tracks/${playlistId}/${trackId}`, null, options)

    }
    catch (err) {
        throw err
    }
}

async function getGenreList() {
    try {
        let res = await axios.get('https://api.sprintt.co/music/categories', options)
        return res.data.categories
    }
    catch (err) {
        console.error(err);
    }
}
async function getGenrePlayslists(id) {
    try {
        let res = await axios.get(`https://api.sprintt.co/music/category_playlists/${id}`, options)
        return res.data
    }
    catch (err) {
        console.error(err);
    }
}

const getEncryptedToken = (token) => {
    let date = new Date();
    let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
    let stringToEncrypt = `${token}===${utcTime}`
    return btoa(stringToEncrypt)
}

const options = {
    headers: {
        'user-access-token': `${TOKEN}`,
        //  'Access-Control-Allow-Origin': "*"
    }
};

