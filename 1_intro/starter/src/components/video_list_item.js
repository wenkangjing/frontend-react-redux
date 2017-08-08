import React from 'react';

// ES6 pull props.video to a local varable
const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt=""/>
        </div>

        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>
      </div>
    </li>
  );
}
export default VideoListItem;
