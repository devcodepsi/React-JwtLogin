import React from 'react';
import { useNavigate } from 'react-router-dom';

const Regist = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>please regist</p>
      <button type="button" onClick={() => navigate('/')}>
        go Login
      </button>
    </>
  );
};

export default Regist;
