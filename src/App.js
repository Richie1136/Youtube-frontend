import { useState, useEffect } from 'react'
import SearchBar from './components/searchbar/SearchBar'
import VideoList from './components/videolist/VideoList'
import VideoDetail from './components/videodetail/VideoDetail'
import useVideos from './hooks/useVideos'
import './App.css'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const [videos, search] = useVideos('');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={handleVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}



export default App