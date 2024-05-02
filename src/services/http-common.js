// http-common.js

import axios from "axios";

export default axios.create({
  baseURL: "https://my-json-server.typicode.com/rizalherlangga/backend-placeholder/data", // Pastikan URL ini sesuai dengan endpoint API Anda
  headers: {
    "Content-type": "application/json"
  }
});
