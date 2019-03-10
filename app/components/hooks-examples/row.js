import React, { Component } from 'react'


const Row = (props) => {
    const style = {
        row : {
            fontSize : '20px',
        }
    }
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Row;