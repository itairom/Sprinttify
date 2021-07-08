import { axiosService } from "../services/axiosService";

// Dispatchers
const _setFeaturedPlaylist = (featuredPlaylist) => ({ type: 'SET_FEATURED', featuredPlaylist });
// THUNK
export function loadFeatured() {
    return async (dispatch) => {
        const featuredPlaylist = await axiosService.getFeaturedPlaylist();
        dispatch(_setFeaturedPlaylist(featuredPlaylist));
    }
}