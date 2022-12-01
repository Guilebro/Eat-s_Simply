import { useState } from "react";
import "./rating.css";

function Rating() {
  const star = [
    {
      id: 1,
      source1: "Icon/rating-star.png",
      source2: "Icon/rating-star-empty.png",
    },
    {
      id: 2,
      source1: "Icon/rating-star.png",
      source2: "Icon/rating-star-empty.png",
    },
    {
      id: 3,
      source1: "Icon/rating-star.png",
      source2: "Icon/rating-star-empty.png",
    },
    {
      id: 4,
      source1: "Icon/rating-star.png",
      source2: "Icon/rating-star-empty.png",
    },
    {
      id: 5,
      source1: "Icon/rating-star.png",
      source2: "Icon/rating-star-empty.png",
    },
  ];
  const randomNumber = Math.floor(Math.random() * (6 - 2) + 2);

  const [index, setIndex] = useState(randomNumber);

  const handleStar = (id) => {
    setIndex(id);
  };

  return (
    <div className="ratingStar">
      {star.map((starRating, idx) => {
        return (
          <img
            src={idx < index ? starRating.source1 : starRating.source2}
            alt=""
            onClick={() => handleStar(starRating.id)}
            role="presentation"
          />
        );
      })}
    </div>
  );
}

export default Rating;
