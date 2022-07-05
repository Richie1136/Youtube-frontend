import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {

  const handleVideoSelect = () => {
    onVideoSelect(video)
  }

  return (
    <div className="video-item item" onClick={handleVideoSelect}>
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header" style={{ 'color': 'white' }}>{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem