import axios from 'axios'

const KEY = 'AIzaSyD0kHK5mRfF0teHP-R6eXvVhyk7G-dsPGs'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
