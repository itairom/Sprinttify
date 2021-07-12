import axios from 'axios'

const TOKEN = '1e6be782-0600-4b32-9674-5a4488ae6cd4';

export const axiosService = {
    getFeaturedPlaylist,
    getMoodPlaylist,
    getRecentlyPlayedPlaylist,
    getPlaylistTracks,
    getPlaylingTrack
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
        console.log("🚀 ~ file: axiosService.js ~ line 53 ~ getPlaylingSong ~ resp", resp)
        // return resp.data
        return resp.config.url

        // const blob = new Blob([resp.data], {
        //     type: 'audio/mp3'
        // });

        // const url = URL.createObjectURL(blob);
        // // console.log("🚀 ~ file: axiosService.js ~ line 63 ~ getPlaylingTrack ~ url", url)
        // return url

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

