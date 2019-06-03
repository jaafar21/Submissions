import React from "react";

const SmallVideos = ({ video, handleVideoSelect }) => {
  return (
    <div className="SmallVideos">
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Bv_5Zv5c-Ts" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe> 
      </div>
    </div>
  );
};

export default SmallVideos;
