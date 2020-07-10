const apiData =
  `import axios from 'axios';    
     
const baseAPI = axios.create({baseURL: ''});
       
export const setToken = token => {
   baseAPI.defaults.headers.common['Authorization'] = ` +
  "`Bearer ${token}`" +
  `;       
};
       
export const deleteToken = () => {
   delete baseAPI.defaults.headers.common['Authorization'];
};
       
export default baseAPI;`;

export default apiData;
