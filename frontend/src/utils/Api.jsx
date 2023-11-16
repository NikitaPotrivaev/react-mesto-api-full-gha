class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
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
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(this._checkRequest)
    }

    setUserInfo(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            },
            body: JSON.stringify({ name, about })
        })
        .then(this._checkRequest)
    }

    getCardList() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(this._checkRequest)
    }

    setUserAvatar({ avatar }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            },
            body: JSON.stringify({ avatar })
        })
        .then(this._checkRequest)
    }


    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            },
            body: JSON.stringify({ name, link })
        })
        .then(this._checkRequest)
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(this._checkRequest)
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${ localStorage.getItem('token') }`
                },
                method: 'PUT'
            })
            .then(this._checkRequest)
        } else {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${ localStorage.getItem('token') }`
                },
                method: 'DELETE'
            })
            .then(this._checkRequest)
        }
    }
}

export const api = new Api({ baseUrl: 'http://localhost:3000' });


/* class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
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
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(this._checkRequest)
    }

    setUserInfo(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            },
            body: JSON.stringify({ name, about })
        })
        .then(this._checkRequest)
    }

    getCardList() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(this._checkRequest)
    }

    setUserAvatar({ avatar }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            },
            body: JSON.stringify({ avatar })
        })
        .then(this._checkRequest)
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            },
            body: JSON.stringify({ name, link })
        })
        .then(this._checkRequest)
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(this._checkRequest)
    }

    changeLikeCardStatus(cardId, isLiked) {
        const method = isLiked ? 'PUT' : 'DELETE';
        return fetch(`${this._baseUrl}cards/${cardId}/likes`,{
            method: method,
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`                
            }
        })
        .then(this._checkRequest)
    }
}

export const api = new Api('http://localhost:3000'); */