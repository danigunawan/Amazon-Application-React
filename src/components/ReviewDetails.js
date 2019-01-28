import React from "react";
import Star from "./Star";

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
            {/* <p>Star rating: {props.rating}</p> */}
            <Star max={5} current={props.rating} />
            <p><strong>Created at:</strong>
                {props.created_at.toLocaleString()}
            </p> <br/>
        </div>
    );
};

export default ReviewDetails;