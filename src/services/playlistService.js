import { axiosService } from '../services/axiosService'

export const playlistService = {

    query



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




