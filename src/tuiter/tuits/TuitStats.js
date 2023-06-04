import React, { useState } from 'react';
import { BsChatSquare, BsHeart, BsArrowRepeat, BsHeartFill, BsShare } from 'react-icons/bs';
import './home.css'

const TuitStats = ({ replies, retuits, likes, liked }) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="tuit-stats">
      <div className="tuit-stat">
        <BsChatSquare />
        {replies}
      </div>
      <div className="tuit-stat">
        <BsArrowRepeat />
        {retuits}
      </div>
      <div className="tuit-stat">
        {isLiked ? (
          <BsHeartFill className="heart-icon liked" onClick={handleLike} />
        ) : (
          <BsHeart className="heart-icon" onClick={handleLike} />
        )}
        {likesCount}
      </div>
      <div className="tuit-stat">
        <BsShare />
      </div>
    </div>
  );
};

export default TuitStats;
