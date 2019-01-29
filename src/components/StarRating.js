import React from "react";
import Star from "./Star";

function StarRating(props) {
    const { max, current } = props;
    return (
      <div className="StarRating">
        {Array.from({ length: max }).map((el, index) => {
          return (
            <Star
              key={index}
              style={{
                height: '1em',
                color: index < current ? 'gold' : 'blacksmoke',
              }}
            />
          );
        })}
      </div>
    );
  };

export default StarRating;