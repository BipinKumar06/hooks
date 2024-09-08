import React from 'react';

const Button = React.memo(({ handleClick, text }) => { // Destructure props here
    return (
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    );
});

export default Button;
