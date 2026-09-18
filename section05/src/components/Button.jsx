import React from 'react';

const button = ({text, color = "black", children}) => {

    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
        <button style={{color: color}} onClick={onClickButton}>
            {text} - {color}
            {children}
        </button>
    );
};

export default button;
