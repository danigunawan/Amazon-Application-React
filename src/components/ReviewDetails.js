import React from "react";

const ReviewDetails = props => {
    return (
        <div>
            <p>{props.body}</p>
            <p>{props.author.full_name}</p>
            <p><strong>Created at:</strong>
                {props.created_at.toLocaleString()}
            </p>
        </div>
    );
};

export default ReviewDetails;