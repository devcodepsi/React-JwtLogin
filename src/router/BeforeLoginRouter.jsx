import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const BeforeLoginRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationPath = location.pathname; 

  const [logged, setLogged] = useState(false);
  const storageUser = localStorage.getItem('ACCESS_TOKEN');

  const settingLogged = () => {
    if (storageUser) {
      setLogged(true);
      navigate('/dashboard');
    } else {
      setLogged(false);
    }
  };

  useEffect(() => {
    settingLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationPath]);

  if (!logged) {
    return <Outlet />;
  }
};
export default BeforeLoginRouter;
