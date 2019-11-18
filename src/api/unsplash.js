import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6ca53c29205e99b473b42b0d115398ca06e18368605c6046fd096fe63ea7cba9'
  }
});