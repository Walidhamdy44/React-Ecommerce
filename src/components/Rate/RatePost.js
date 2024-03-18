import React from "react";
import { Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
const RatePost = () => {
  const ratingChanged = (newRating) => {};
  return (
    <div className="rate-post">
      <div>
        <h5>Mohamed Sameer</h5>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={28}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          isHalf={true}
          activeColor="#ffd700"
        />
      </div>
      <div className="input">
        <textarea type="text" placeholder="Write A Comment" />
        <Button>Comment</Button>
      </div>
    </div>
  );
};

export default RatePost;
