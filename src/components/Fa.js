import React from "react";


const Fa = props => {
    return (
        <i class={"fa " + "fa-" + props.kind}  ></i>
    );
};

export default Fa;