import axios from 'axios'

export const playlistService = {
    apiTest
}

async function apiTest() {
    try {
        const resp = await axios.get('https://yesno.wtf/api')
        return resp.data
    }
    catch {
        console.log('error');
    }

}