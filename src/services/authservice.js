import axios from "axios";

// TODO: stop using a magic const for the api url
const API_URL = "http://localhost:3001/";

class Auth {
    login(username) {
        return axios
            .post(`${API_URL}login`, { username })
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("token", res.data.token);
                }

                return res.data;
            });
    }

    logout() {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
    }

    register(username) {
        return axios.post(`${API_URL}register`, {
            username
        });
    }

    getUser() {
        const obj = {
            username: localStorage.getItem("username"),
            token: localStorage.getItem("token"),
        };
        return obj;
    }
}

export default new Auth();