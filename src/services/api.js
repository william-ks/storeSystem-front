import axios from 'axios';

export default axios.create({
  baseUrl: "http://localhost:3001",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});