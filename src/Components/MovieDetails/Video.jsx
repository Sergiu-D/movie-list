import React from "react";
import ReactPlayer from "react-player/lazy";

export default function Video(url) {
  console.log("Video: ", url);
  return (
    <div>
      {/* <ReactPlayer url={url} controls={true} playing={false} /> */}
      {url}
    </div>
  );
}
