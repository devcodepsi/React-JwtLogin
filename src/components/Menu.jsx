import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const actionLogout = () => {
    /*
    localStorage.removeItem('USER_ID');
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
    localStorage.removeItem('EXPIRED_AT');
    */
   localStorage.clear();
    navigate('/');
  };
  
  return (
    <>
      <menu style={{ display: 'flex', gap: '20px' }}>
        <Link to="/dashboard">Home</Link>
        <Link to="/second">second</Link>
        <Link to="/third">third</Link>
        <button type="button" onClick={actionLogout}>
          Logout
        </button>
      </menu>
    </>
  );
};
export default Menu;
