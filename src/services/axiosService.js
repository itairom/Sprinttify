import axios from 'axios'

export const axiosService = {
    getFeaturedPlaylist, getMoodPlaylist, getRecentlyPlayedPlaylist
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

const options = {
    headers: { 'user-access-token': '1e6be782-0600-4b32-9674-5a4488ae6cd4' }
};

