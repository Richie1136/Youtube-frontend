import axios from 'axios'
const KEY = 'AIzaSyA5GWULMe9i0IOoXanZADXSMLl_Hj7qPCU'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
