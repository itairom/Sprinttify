import axios from 'axios'

export const playlistService = {
    apiTest
}

async function apiTest() {
    try {
        const resp = await axios.get('http://api.sprintt.co/spotify/',options)
        return resp.data
    }
    catch {
        console.log('error');
    }

}

const options = {
    headers:{'user-access-token': '1e6be782-0600-4b32-9674-5a4488ae6cd4'}
  };