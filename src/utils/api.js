class ApiCustomer {
  constructor(config) {
    this._url = config.url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getCustomers() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

export const apiCustomer = new ApiCustomer({
  // url: 'https://api.nomoreparties.co/beatfilm-movies',
  url: "https:/api.mocki.io/v2/6ade65a4",
});
