import React, { Component } from 'react';


const LocationCard = (props) => {
    return (
        <div>
            <hr />
            <p> <strong> Name</strong>  : {props.Name}</p>
            <p> <strong> Zone</strong>  : {props.Zone}</p>
            <p> <strong> Region</strong>  : {props.Region}</p>
            <hr />
        </div>
    );
}


export default LocationCard;