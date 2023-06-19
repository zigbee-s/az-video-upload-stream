import React from 'react';

const VideoPlayer = () => {
  const videoUrl = 'https://hackathonvideogg.blob.core.windows.net/videos/test2.mp4?sv=2022-11-02&spr=https&st=2023-06-19T09%3A22%3A25Z&se=2023-06-19T10%3A22%3A25Z&sr=b&sp=r&sig=7xuMgoRDCnPh0HsBtDAI%2F0zHd0gEnL86myOTr%2Ft%2Fwi4%3D'

  return (
    <div>
        <h2>Stream</h2>
        <video controls style={{ width: '500px', height: 'auto' }}>
            <source src={videoUrl} type="video/mp4" />
        </video>
    </div>
  );
};

export default VideoPlayer;
