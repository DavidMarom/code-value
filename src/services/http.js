const axios = require('axios').default;

export function fakestoreGet() {
    return axios(
        {
            method: 'get',
            url: 'https://fakestoreapi.com/products?limit=15',
        }
    )
}
