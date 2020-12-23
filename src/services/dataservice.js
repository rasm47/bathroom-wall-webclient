import axios from 'axios';

// TODO: stop using a magic const for the api url
const API_URL = "http://localhost:3001/";

function tokenHeader() {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
}

class DataService {
    async getSecret() {
        try {
            const res = await axios.get(
                `${API_URL}secret`,
                { headers: tokenHeader() },
            );
            return JSON.stringify(res.data);
        } catch(e) {
            return JSON.stringify(e.message);
        }
    }
}

export default new DataService();
