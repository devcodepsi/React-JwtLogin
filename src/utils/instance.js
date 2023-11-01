import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const baseUrl = process.env.REACT_APP_DOMAIN;

const axiosApi = () => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
  });


  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  const refreshToken = localStorage.getItem('REFRESH_TOKEN');
  const userId = localStorage.getItem('USER_ID');
  const expiredAt = localStorage.getItem('EXPIRED_AT');
  const now = Date.now();

  instance.interceptors.response.use( 
    (res) => {
      return res;
    },  async (error) => {
      const originalRequest = error.config;
      const errorHasNotUserId = () => userId != null ? true : false ;
      const errorHasNotToken = () => !accessToken == null ? true : false;
      const errorStatus = () => (error.request.status === 401  && !originalRequest._retry) ? true : false;
      const errorTokenExpired = () => (expiredAt - now < 10000) ? true : false;

      if ( errorHasNotUserId() && (errorHasNotToken() || errorStatus() || errorTokenExpired()) ) {
        try {
          const res = await instance.post('auth/refresh-token', { refreshToken });
          const { access_token } = res.data;
          localStorage.setItem('ACCESS_TOKEN', access_token);
          localStorage.setItem('EXPIRED_AT', jwtDecode(access_token).exp * 1000);
          originalRequest.headers.Authorization = `Bearer ${access_token}`;
          return axios(originalRequest);
        } catch (error) {
          localStorage.clear();
          window.location.href='/';
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;  
};
export const instance = axiosApi();