import React from "react";

const ReviewDetails = props => {
    return (
        <div style={{
            backgroundColor: "whitesmoke",
            borderRadius: "10px",
            margin: "10px",
            paddingLeft: "10px"
        }}>
            <br/>
            <p>Reviewed by: {props.author.full_name}</p>
            <p>{props.body}</p>
            <p>Star rating: {props.rating}</p>
            <p><strong>Created at:</strong>
                {props.created_at.toLocaleString()}
            </p> <br/>
        </div>
    );
};

export default ReviewDetails;