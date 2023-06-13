const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8000'
  : 'https://np-backend.herokuapp.com'


  export default BASE_URL;