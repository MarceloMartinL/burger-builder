import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-fc97d.firebaseio.com/'
});

export default instance;