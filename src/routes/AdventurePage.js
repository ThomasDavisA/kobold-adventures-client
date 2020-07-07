import React, { Component } from 'react';
import KoboldsContext from '../context/KoboldContext';
import ResolutionButton from '../component/ResolutionButton';
import LocationsService from '../services/locations-api-service';
import KoboldsApiService from '../services/kobolds-api-service';

import Moon from '../svg/moon.svg';
import Sun from '../svg/sun.svg';

import './AdventurePage.css';

export default class AdventurePage extends Component {
    static contextType = KoboldsContext;

    componentDidMount = () => {
        KoboldsApiService.getKoboldByToken()
            .then(kobold => {
                this.context.setKobold(kobold);
                if (!this.context.adventure.encounter) {
                    this.props.history.push('/main');
                }
            });

    }

    renderProgress = () => {

        const barFill = {
            width: `${this.context.adventure_progress}%`
        };

        return (
            <div className='adventure-box__header'>
                <div className='adventure-bar'>
                    <img className='adventure-bar__Sun adventure-bar__Sun--animate' src={Sun} alt='' />
                    <div className='adventure-bar__background'>
                        <div className='adventure-bar__progress' style={barFill}></div>
                    </div>
                    <img className='adventure-bar__Moon adventure-bar__Moon--animate' src={Moon} alt='' />
                </div>
                <h4>Progress: {this.context.adventure_progress}%</h4>
            </div>
        );
    }


    renderEncounter = () => {
        return (
            <div className='adventure-box__encounter'>
                <h3 className='adventure-box__event'>Event!</h3>
                <h4 className='adventure-box__event-header'>{this.context.adventure.encounter.encounter_name}</h4>
                <p className='adventure-box__event-text'>{this.context.adventure.encounter.encounter_text}</p>
            </div>
        );
    }

    renderResolutions = () => {
        const resolutions = this.context.adventure.resolutions;
        const render = resolutions.map(res => {
            return <ResolutionButton key={res.id} resolution={res} className='action-button' />
        });
        return render;
    }

    continueAdventure = () => {
        this.context.clearAction();
        this.context.clearAdventure();
        KoboldsApiService.getAdventureProgress(this.context.kobold.kobold_id)
            .then(progress => {
                if (progress >= 100) {
                    KoboldsApiService.clearAdventureProgress(this.context.kobold.kobold_id)
                        .then(res => {
                            this.context.clearAdventureProgress();
                            this.props.history.push('/main/adventure/rewards');
                        });
                }
                else {
                    this.context.setAdventureProgress(progress);
                    LocationsService.getAdventure(this.context.location)
                        .then(adventure => {
                            this.context.setAdventure(adventure[0], adventure[1])
                            this.props.history.push(`/main/adventure`);
                        });
                }
            });
    }

    render() {
        return (
            <div className='div-adventure-box'>

                {this.context.adventure &&
                    this.renderProgress()}

                {this.context.adventure.encounter &&
                    this.renderEncounter()}

                {!this.context.resolve.resolveFlag &&
                    <div className="button-box">
                        {this.context.adventure.encounter &&
                            this.renderResolutions()}
                    </div>
                }


                {this.context.resolve.resolveFlag &&
                    <div className="results-box">
                        <h5>{this.context.resolve.resolveSuccess}</h5>
                        <p>{this.context.resolve.resolveMessage}</p>
                        <button className='results-box__button' onClick={() => this.continueAdventure()}>Continue</button>
                    </div>}

            </div>
        );
    }
}