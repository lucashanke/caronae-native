import axios from 'axios';

const caronae = axios.create({
  baseURL: process.env.CARONAE_API_URL || 'https://api.dev.caronae.org/',
  timeout: 1000,
});

export const login = (id, token) => {
  return caronae.post('/user/login', {
    id_ufrj: id,
    token,
  });
};