import React from "react";
import StarRating from "./StarRating";

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
            <StarRating max={5} current={props.rating} />
            <p><strong>Created at:</strong>
                {props.created_at.toLocaleString()}
            </p>
            <button onClick={() => props.onDeleteClick(props.id)} >Delete</button>
        </div>
    );
};

export default ReviewDetails;