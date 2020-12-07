import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    //2.axios的拦截器
    axios.interceptors.request.use(config => {
      console.log(config);
      //1.
      return config
    },err => {
      console.log(err);
    });
    axios.interceptors.response;
    return instance(config)
  }