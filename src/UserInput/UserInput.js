import React from 'react';


const userinput = (props) => {
    return (
        <div>
            <input type='text' onChange={props.change} value={props.username}/>
        </div>
    
    )    
};

export default userinput;