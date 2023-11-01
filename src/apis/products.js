import { instance } from '../utils/instance';


// products 가져오기
export const getProducts = async () => {
  return await instance
    .get('products?offset=10&limit=10')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
