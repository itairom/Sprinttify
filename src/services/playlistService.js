import { axiosService } from '../services/axiosService'

export const playlistService = {
    query,
    getPlaylistTracksById
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

async function getPlaylistTracksById(id ) {
    const tracks = await axiosService.getPlaylistTracks(id)
    return tracks
}


