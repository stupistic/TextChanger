import React from "react";

const Greet = function (props) {
    // console.log(props);
    return (
        <div>
            <h1>Hello {props.name} and {props.heroname}</h1>
            {props.children}
        </div>

    )
}



export { Greet };