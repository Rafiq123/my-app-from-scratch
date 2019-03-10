import React from 'react';
import HOC from '../HOC';

const User = (props) => {
    return (
        <div>{props.children}</div>
    );
}

export default HOC(User);