class Auth {
    constructor(BASE_URL) {
        this._BASE_URL = BASE_URL
    }

    _checkRequest(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }
    }

    checkToken(token) {
        return fetch(`${this._BASE_URL}/users/me`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(this._checkRequest)
    }

    register(password, email) {
        return fetch(`${this._BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, email })
        })
        .then(this._checkRequest)
    }

    login(password, email) {
        return fetch(`${this._BASE_URL}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, email })
        })
        .then(this._checkRequest)
    }
}

export const authApi = new Auth('http://localhost:3000')