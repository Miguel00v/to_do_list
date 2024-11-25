import React from 'react';

function Button({ link, label }) {
    return (
        <a href={link}>
            <button className="session-buttons"><p>{label}</p></button>
        </a>
    );
}

export default Button;