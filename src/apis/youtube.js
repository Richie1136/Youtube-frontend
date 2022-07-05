import axios from 'axios'
// const KEY = 'AIzaSyA5GWULMe9i0IOoXanZADXSMLl_Hj7qPCU'

// Whenever i hide this API KEY .env i recieve a 403 error code

console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
let key = process.env.REACT_APP_YOUTUBE_API_KEY
console.log(key)

let Api = {
  key: process.env.REACT_APP_YOUTUBE_API_KEY
}

// console.log(KEY)


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: Api.key,
  }
});
