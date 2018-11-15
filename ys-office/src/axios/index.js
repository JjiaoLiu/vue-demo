import axios from "axios";

const Axios = axios.create({
  timeout: 8000, responseType: "json", headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }, withCredentials: true
});
Axios.interceptors.request.use(config => {
  if (getCookie('token')) {
    config.headers.token = getCookie('token');
  }
  return config;
}, error => {
  return Promise.reject(error);
});

Axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return response;
  } else {
    console.log(response.data.msg)
  }
}, error => {
  return Promise.reject(error);
});

export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, "$axios", {value: Axios});
  }
};
