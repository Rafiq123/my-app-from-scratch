import React, { Component } from 'react';

const HOC = (WrappedComponent) => {
    return (props) => {
        return (
            <WrappedComponent>
                {props.children.toUpperCase()}
            </WrappedComponent>
        )
    }
}



export default HOC;