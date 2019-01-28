import React from "react";

const ReviewDetails = props => {
    return (
        <div style={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            paddingLeft: "10px"
        }}>
            <p>{props.body}</p>
            <p>{props.rating}</p>
            <p><strong>Created at:</strong>
                {props.created_at.toLocaleString()}
            </p>
        </div>
    );
};

export default ReviewDetails;