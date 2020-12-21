import axios from 'axios';

// TODO: stop using a magic const for the api url
const API_URL = "http://localhost:3001/";

function tokenHeader() {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
}

class DataService {
    getSecret() {
        return axios.get(
            `${API_URL}secret`,
            { headers: tokenHeader() },
        );
    }
}

export default new DataService();
