import React from "react";

const SuperButton = () => {
    const clickTheButton = () => {
        alert('Button Pressed!');
    };

    return (
        <button onClick={clickTheButton}>
            Push the Button!
        </button>
    )
};

export default SuperButton;