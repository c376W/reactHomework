import React from 'react';


const useroutput = (props) => {
    return (
        <div className="output">
            <p>UserOutput1</p>
            <p>I'm {props.username}.</p>
        </div>
    
    )    
};

export default useroutput;