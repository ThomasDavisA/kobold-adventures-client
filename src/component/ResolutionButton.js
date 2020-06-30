import React, { Component } from 'react';
import KoboldsContext from '../context/KoboldContext';
import KoboldsApiService from '../services/kobolds-api-service';

import './ResolutionButton.css';

export default class ResolutionButton extends Component {
    static contextType = KoboldsContext;

    handleClick = (id) => {
        KoboldsApiService.getEncounterOutcome(id, this.context.kobold.kobold_id)
            .then(resolve => {
                console.log(resolve)
                this.context.resolveAction(resolve)
            })
        
    }

    render () {
        return (
            <button className='button__resolution button__resolution--active' onClick={() => this.handleClick(this.props.resolution.id)}>{this.props.resolution.resolution_name}</button>
        )
    }
}