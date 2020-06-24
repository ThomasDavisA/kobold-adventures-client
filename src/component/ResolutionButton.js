import React, { Component } from 'react';
import KoboldsContext from '../context/KoboldContext';
import KoboldsApiService from '../services/kobolds-api-service';

export default class ResolutionButton extends Component {
    static contextType = KoboldsContext;

    handleClick = (id) => {
        KoboldsApiService.getEncounterOutcome(id)
            .then(resolve => {
                console.log(resolve)
                this.context.resolveAction(resolve)
            })
        
    }

    render () {
        return (
            <button onClick={() => this.handleClick(this.props.resolution.id)}>{this.props.resolution.resolution_name}</button>
        )
    }
}