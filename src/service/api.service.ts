import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const { API_URL, PORT, ACCESS_TOKEN, API_VERSION } = process.env;

const api = axios.create({
  baseURL: API_URL ?? `http://localhost:${PORT ?? '3000'}`,
  timeout: 16000,
  responseType: 'json',
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'Notion-Version': API_VERSION,
  },
});

export default api;
