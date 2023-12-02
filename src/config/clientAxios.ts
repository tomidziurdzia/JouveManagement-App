// import axios from 'axios';
// import {BACKEND_URL} from '@env';

import axios from 'axios';

// const clientAxios = axios.create({
//   baseURL: `${BACKEND_URL}/api`,
// });

// clientAxios.interceptors.request.use((config: any) => {
//   config.headers = {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${localStorage.getItem('token')}`,
//   };

//   return config;
// });

// export default clientAxios;

const clientAxios = axios.create({
  baseURL: 'http://localhost:3000/api',
  responseType: 'json',
  withCredentials: true,
});

export default clientAxios;
