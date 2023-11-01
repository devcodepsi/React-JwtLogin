import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>페이지를 찾을 수 없습니다.</p>
      <button type="button" onClick={() => navigate(-1)}>
        go back
      </button>
    </>
  );
};
export default NotFound;
