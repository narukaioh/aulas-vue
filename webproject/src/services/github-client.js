import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'token 254932c621a7cc13bff59461723e1c7f1cd45e36'
  }
});


export default client