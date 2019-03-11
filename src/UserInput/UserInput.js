import React from 'react';


const userinput = (props) => {
    return (
        <div className="output">
            <input type='text' onChange={props.change} value={props.username}/>
        </div>
    
    )    
};

export default userinput;