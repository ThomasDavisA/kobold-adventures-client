import React, { Component } from 'react';
import KoboldContext from '../context/KoboldContext';
import './AreaButton.css';

export default class AreaButton extends Component {
    static contextType = KoboldContext;

    handleClick = (location) => {
        this.context.setLocation(this.props.location.location_id);
    }

    render() {
        return (
            <>
                <button className='location-button' type='button' onClick={() => this.handleClick(this.props.location.id)}>
                    {this.props.location.location_name}
                    {(this.context.location === this.props.location.location_id) &&
                        <div className='location-button--expanded'>
                            <p className='location-button__description'>{this.props.location.location_description}</p>
                            <h4 className='location-button__level-requirement'>Recommended Level: {this.props.location.location_level}</h4>

                        </div>
                    }
                </button>
            </>
        )
    }
}