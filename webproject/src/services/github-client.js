import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'token 5aba492b87e6457b82a6f6e7fc8ffb9468d7212d'
  }
});


export default client