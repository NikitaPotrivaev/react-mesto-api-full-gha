class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkRequest(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(this._checkRequest)
    }

    setUserInfo(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({ name, about })
        })
        .then(this._checkRequest)
    }

    getCardList() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(this._checkRequest)
    }

    setUserAvatar({ avatar }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({ avatar })
        })
        .then(this._checkRequest)
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify({ name, link })
        })
        .then(this._checkRequest)
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            headers: this._headers,
            method: 'DELETE'
        })
        .then(this._checkRequest)
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                headers: this._headers,
                method: 'PUT'
            })
            .then(this._checkRequest)
        } else {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                headers: this._headers,
                method: 'DELETE'
            })
            .then(this._checkRequest)
        }
    }
}

export const api = new Api({
    baseUrl: 'http://localhost:3000',
    headers: {
        Authorization: `Bearer ${ localStorage.getItem('token') }`,
       'Content-Type': 'application/json'
    }
});