import React, { Component } from 'react';
import KoboldContext from '../context/KoboldContext';
import AreaButton from './AreaButton';

export default class AreaSelection extends Component {
    static contextType = KoboldContext;

    filterLocations(locations) {
        const filteredLocations = locations.filter(location => this.context.kobold_level >= location.location_level)
        return (
            filteredLocations.map(Location => {
                return <AreaButton></AreaButton>
            })
        )
    };


    handleClick = (location) => {
        this.context.setLocation(location);
        this.props.history.push(`/adventure`);
    }

    render() {
        return (
            <>
            <h3>Areas:</h3>
            {this.filterLocations()}
            <button onClick={() => this.handleClick('The Lake')}>The Lake</button>
            </>
        )
    }
}