// import axios from 'axios';
// import {BACKEND_URL} from '@env';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const clientAxios = axios.create({
  baseURL: 'http://localhost:3000/api',
});

clientAxios.interceptors.request.use(async (config: any) => {
  config.headers = {
    'Content-Type': 'application/json',
    Authorization: await AsyncStorage.getItem('token'),
  };

  return config;
});

// export default clientAxios;

// const clientAxios = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   responseType: 'json',
//   withCredentials: true,
// });

export default clientAxios;
