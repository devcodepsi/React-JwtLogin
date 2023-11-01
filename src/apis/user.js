import { instance } from '../utils/instance';

// 로그인
export const postUser = async (id, pw) => {
  let body = {
    email: id,
    password: pw,
  };
  return await instance
    .post('auth/login', body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

// 이용자 정보 가져오기
export const getUser = async () => {
  return await instance
    .get('auth/profile')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};


// 이용자 정보 가져오기
export const postToken = async (refreshToken) => {
  let body = {
    refreshToken,
  };
  return await instance
    .post('auth/refresh-token', body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
