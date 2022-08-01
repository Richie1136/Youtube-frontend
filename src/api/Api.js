import axios from 'axios'


const APIKEY = process.env.REACT_APP_API_KEY

console.log(APIKEY)

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    // key: "AIzaSyA5GWULMe9i0IOoXanZADXSMLl_Hj7qPCU",
    key: APIKEY

  }
});
