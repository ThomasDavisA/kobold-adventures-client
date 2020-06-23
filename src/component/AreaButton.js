import React, { Component } from 'react';

export default class AreaButton extends Component {
    

    render() {
        return (
            <>
            <button className='adv-button' value={this.props.location_id}>{this.props.location_name}</button>
            </>
        )
    }
}