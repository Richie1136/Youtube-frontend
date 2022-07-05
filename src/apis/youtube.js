import axios from 'axios'
// const KEY = 'AIzaSyA5GWULMe9i0IOoXanZADXSMLl_Hj7qPCU'

// Whenever i hide this API KEY .env i recieve a 403 error code

let key = process.env.REACT_APP_YOUTUBE_API_KEY

let Api = {
  key: process.env.REACT_APP_YOUTUBE_API_KEY
}


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: Api.key,
  }
});
