import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {

  const handleVideoSelect = () => {
    onVideoSelect(video)
  }

  return (
    <div className="video-item item" onClick={handleVideoSelect}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem