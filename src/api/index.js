import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    },
})


export const api1 = axios.create({
    baseURL: 'http://127.0.0.1:3001/api/auth',
    headers: {
        'Content-Type': 'application/json'
    },
})