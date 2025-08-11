import React, { useRef } from "react";
import "./Video.css";

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        // autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
