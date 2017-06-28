import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'token 7f291a74db701b63a99401a397bca4b953aa4838'
  }
});


export default client