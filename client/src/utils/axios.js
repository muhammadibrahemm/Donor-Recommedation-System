// src/utils/axios.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // Optional, needed if using cookies
});
