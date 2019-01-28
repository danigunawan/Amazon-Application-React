import React from "react";
import ReviewDetails from "./ReviewDetails";

const ReviewList = props => {
    return (
        <ul>
            {props.reviews.map(review => (
                <li key={review.id}>
                    <ReviewDetails {...review} />
                </li>
            ))}
        </ul>
    );
};

export default ReviewList;