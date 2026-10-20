import request from "@/api/axios.js";

const http = {
  // get请求
  get(url, params) {
    return request.get(url, { params });
  },

  // post请求
  post(url, data) {
    return request.post(url, data);
  },
};

export default http;
