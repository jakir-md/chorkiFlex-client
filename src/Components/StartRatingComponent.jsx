import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRatingComponent = () => {
  const [rating, setRating] = useState(0); // Store the rating value

  // Handle rating update
  const handleRating = (rate) => {
    setRating(rate);
    console.log(`User selected rating: ${rate}`);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-lg font-bold mb-2">Rate this product:</h2>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          size={30}
          transition={true}
          allowHalfIcon={true}
          allowHover={true}
        />

      <p className="mt-2 text-gray-600">Your Rating: {rating / 20} / 5</p>
    </div>
  );
};

export default StarRatingComponent;
