import React, { Component } from 'react';
import LocationCard from './locationCard';

import lodactionData from './location';

import WithSearch from '../HOC/withSearch';

const Location = (props) => {
    const { searchItem } = props;
    let locations = lodactionData.data.filter((item)=>{
        return `${item.Name} ${item.Zone} ${item.Region}`.toUpperCase().indexOf(searchItem.toUpperCase()) >= 0;
    });
    return (
        <div>
            {
                locations.map((obj) => {
                    return (
                        <LocationCard {...obj} />
                    )
                })
            }
        </div>

    );
}

export default WithSearch(Location);