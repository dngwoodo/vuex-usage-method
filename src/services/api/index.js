import axios from 'axios';
import setInterceptors from './interceptors';

function createInstance() {
  return axios.create({
    baseURL: 'http://localhost:8000',
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `http://localhost: 8000/api/${url}`,
  });

  return setInterceptors(instance);
}

export const instance = createInstance();
export const sensors = createInstanceWithAuth('sensors');
