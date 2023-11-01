import React, {useState, useEffect} from 'react';

import Menu from '../components/Menu';

import { getProducts } from '../apis/products.js';

const DashboardSecond = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const res = await getProducts();
      setList(res.data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <Menu />
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div><img src={item.images[0]} alt="" style={{maxWidth: '100%'}} /></div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default DashboardSecond;
