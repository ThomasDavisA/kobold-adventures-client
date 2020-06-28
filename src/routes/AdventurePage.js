import React, { Component } from 'react';
import KoboldsContext from '../context/KoboldContext';
import ResolutionButton from '../component/ResolutionButton';
import LocationsService from '../services/locations-api-service';
import KoboldsApiService from '../services/kobolds-api-service';

export default class AdventurePage extends Component {
    static contextType = KoboldsContext;

    renderEncounter = () => {
        return (
            <>
                <h4>{this.context.adventure.encounter.encounter_name}</h4>
                <p>{this.context.adventure.encounter.encounter_text}</p>
            </>
        )
    }

    renderResolutions = () => {
        const resolutions = this.context.adventure.resolutions;
        const render = resolutions.map(res => {
            return <ResolutionButton key={res.id} resolution={res} className='action-button' />
        })
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
                        })
                }
                else {
                    this.context.setAdventureProgress(progress);
                    LocationsService.getAdventure(this.context.location)
                        .then(adventure => {
                            this.context.setAdventure(adventure[0], adventure[1])
                            this.props.history.push(`/main/adventure`);
                        })
                }
            })
    }

    render() {
        return (
            <>
                <div className="bar-background progress-background">
                    <div className="progress-complete"></div>
                </div>
                <h4>Progress: {this.context.adventure_progress}%</h4>

                <h3>Event!</h3>
                {this.context.adventure.encounter &&
                this.renderEncounter()}

                {!this.context.resolve.resolveFlag &&
                    <div className="button-box">
                        {this.context.adventure.encounter &&
                        this.renderResolutions()}
                    </div>
                }

                <div className="results-box">
                    {this.context.resolve.resolveFlag &&
                        <>
                            <h5>{this.context.resolve.resolveSuccess}</h5>
                            <p>{this.context.resolve.resolveMessage}</p>
                            <button onClick={() => this.continueAdventure()}>Continue</button>
                        </>}
                </div>
            </>
        )
    }
}