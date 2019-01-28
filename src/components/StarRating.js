import React from "react";
import Star from "./Star";

function StarRating(props) {
    const { max, current } = props;
    return (
      <div className="StarRating">
        {Array.from({ length: max }).map((el, i) => {
          return (
            <Star
              key={i}
              style={{
                height: '1em',
                color: i < current ? 'gold' : 'whitesmoke',
              }}
            />
          );
        })}
      </div>
    );
  };

export default StarRating;