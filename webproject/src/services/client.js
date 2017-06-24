import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000/api/',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});


export default client