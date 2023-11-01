import React, {useState, useEffect} from 'react';

import Menu from '../components/Menu';
import { getUser } from '../apis/user.js';

const DashboardHome = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const getUserInfo = async () => {
    try {
      let user = await getUser();
      setUserName(user.data.name);
      setUserEmail(user.data.email);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Menu />
      <p>home</p>
      <p>{userName}</p>
      <p>{userEmail}</p>
    </>
  );
};
export default DashboardHome;
