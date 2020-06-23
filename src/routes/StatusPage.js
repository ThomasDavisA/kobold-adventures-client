import React, { Component } from 'react';
import StatusBar from '../component/StatusBar';
import KoboldsContext from '../context/KoboldContext';

export default class StatusPage extends Component {
    static contextType = KoboldsContext;

    render() {
        return (
            <>
                <h2>Status!</h2>

                <h2>{this.context.kobold.kobold_name}</h2>
                <div className="level-box">
                    <h3>Player Level: 3</h3>
                    <h3>Kobold Level: {this.context.kobold.kobold_level}</h3>
                </div>


                <div class="stats-box">
                    <h3>Stats</h3>
                    <div class="stats-total">
                        <h4>Muscle: {this.context.kobold.kobold_muscle}</h4>
                        <h4>Fitness: {this.context.kobold.kobold_fitness}</h4>
                        <h4>Eloquence: {this.context.kobold.kobold_eloquence}</h4>
                        <h4>Intellect: {this.context.kobold.kobold_intellect}</h4>
                        <h4>Mana: {this.context.kobold.kobold_mana}</h4>
                    </div>
                </div>

                <div class="adventure-box">
                    <button onClick={() => this.props.history.goBack()}>Go back</button>
                </div>

                <StatusBar />
            </>
        )
    }
}