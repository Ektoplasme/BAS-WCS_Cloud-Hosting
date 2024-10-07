import React from "react";

const Component = ({name}) => {
    return (
        <div>{name}</div>
    )
}

const App = () => {
    const name = "Toto";

    return (
        <Component name={name}/>
    )
}