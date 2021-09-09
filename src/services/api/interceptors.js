import store from '@/store/index';

export default function setInterceptors(instance) {
  instance.interceptors.request.use(
    (config) => {
      /* eslint no-param-reassign: ["error", { "props": false }] */
      config.headers.Authorization = store.state.token;
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // 원래는 모달이 들어갈 예정
      alert(error.response.data.message);
      return Promise.reject(error);
    },
  );

  return instance;
}
