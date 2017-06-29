import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'token 12e568a9b4ba06ad9f5c39991c07ee3eb8f517fd'
  }
});


export default client