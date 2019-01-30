import React from "react";


const Fa = props => {
    if (!props.faSpin) {
        return (
            <span style={{color: "red"}} >
                <i className={"fab " + "fa-" + props.kind + " fa-" + props.size}  ></i>
            </span>
        )
    }
    return (
        <span style={{color: "red"}} >
            <i className={"fab " + "fa-" + props.kind + " fa-" + props.size + " fa-spin"}  ></i>
        </span>
    );
};

export default Fa;