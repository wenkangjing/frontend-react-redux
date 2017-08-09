import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
  if (!videos || videos.length == 0) {
    return <div>Not found</div>;
  }
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem 
        onVideoSelect={onVideoSelect}
        key={video.etag} 
        video={video} />
    );
  })
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;