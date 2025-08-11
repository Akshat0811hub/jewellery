import React from "react";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import ReviewCard from "../reviewCard/ReviewCard";
import "./Video.css";

const VideoReviewCard = ({ videoSrc, name, profession, review, image, rating }) => {
  return (
    <div className="video-review-card">
      <div className="review-section-card">
        <ReviewCard
          name={name}
          profession={profession}
          review={review}
          image={image}
          rating={rating}
        />
      </div>
      <div className="video-section">
        <VideoPlayer src={videoSrc} />
        <VideoPlayer src={videoSrc} />
        <VideoPlayer src={videoSrc} />
        <VideoPlayer src={videoSrc} />
      </div>
    </div>
  );
};

export default VideoReviewCard;
