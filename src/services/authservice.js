import axios from "axios";

// TODO: stop using a magic const for the api url
const API_URL = "http://localhost:3001/";

class Auth {
    login(username, successCallback) {
        return axios
            .post(`${API_URL}login`, {
                username
            })
            .then(res => {
                if (res.data.token && res.data.token !== "") {
                    localStorage.setItem("username", username);
                    localStorage.setItem("token", res.data.token);
                    successCallback();
                }
                return;
            }).catch(e => {
                if (e && e.response && e.response.status === 401) {
                    // TODO: replace this temp alert with something better 
                    alert("Invalid username or password.");
                }
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