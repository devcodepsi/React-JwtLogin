import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { postUser, getUser } from '../apis/user.js';
import { instance } from '../utils/instance.js';

import jwt_decode from "jwt-decode";


const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  // 로그인 버튼 클릭 후 결과에 따라 페이지 이동
  const getUserInfo = async () => {
    try {
      const res = await getUser();
      localStorage.setItem('USER_ID', res.data.id);
      navigate('/dashboard');
    } catch(err) {
      console.log(err);
    }
  }

  // 로그인 버튼 클릭
  const actionLogin = async () => {
    try {
      const res = await postUser(id, pw);
      const { access_token, refresh_token } = res.data;
      const accessToken = access_token;
      const refreshToken = refresh_token;
      localStorage.setItem('ACCESS_TOKEN', accessToken);
      localStorage.setItem('REFRESH_TOKEN', refreshToken);
      instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      const decoded = jwt_decode(accessToken || '{}');
      localStorage.setItem('EXPIRED_AT', decoded.exp * 1000);
      getUserInfo();
    } catch(err) {
      alert('login error');
    }
  };
  return (
    <form>
      <div style={{ display: 'flex' }}>
        <label htmlFor="inputId" style={{ width: '100px' }}>
          Email
        </label>
        <input
          type="text"
          id="inputId"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ flex: '0 0 200px' }}
        />
      </div>
      <br />
      <div style={{ display: 'flex' }}>
        <label htmlFor="inputPw" style={{ width: '100px' }}>
          PW
        </label>
        <input
          type="password"
          id="inputPw"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          style={{ flex: '0 0 200px' }}
          autoComplete='off'
        />
      </div>
      <br />
      <button type="button" onClick={actionLogin}>
        Login
      </button>
      <Link to="/regist" style={{ marginLeft: '20px' }}>
        regist
      </Link>
    </form>
  );
};

export default Login;
