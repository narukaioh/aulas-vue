import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'token 983bf822f59f3502855a71cd16409e65d405aea5'
  }
});


export default client