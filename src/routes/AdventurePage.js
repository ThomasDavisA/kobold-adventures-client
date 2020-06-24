import React, { Component } from 'react';
import StatusBar from '../component/StatusBar';
import KoboldsContext from '../context/KoboldContext';
import ResolutionButton from '../component/ResolutionButton';

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
            return <ResolutionButton resolution={res} className='action-button' />
        })
        return render;
    }

    continueAdventure = () => {
        this.context.clearAction();
        this.context.clearAdventure();
        this.props.history.push('/main/adventure/rewards');
    }

    render() {
        return (
            <>
                <div className="bar-background progress-background">
                    <div className="progress-complete"></div>
                </div>
                <h3>Event!</h3>
                {this.renderEncounter()}

                <div className="button-box">

                    {this.renderResolutions()}

                </div>

                <div className="results-box">
                    {this.context.resolve.resolveFlag &&
                        <>
                            <h5>{this.context.resolve.resolveSuccess}</h5>
                            <p>{this.context.resolve.resolveMessage}</p>
                            <button onClick={() => this.continueAdventure()}>Continue</button>
                        </>}
                </div>
                <StatusBar />
            </>
        )
    }
}