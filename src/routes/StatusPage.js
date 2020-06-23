import React, { Component } from 'react';
import StatusBar from '../component/StatusBar';

export default class StatusPage extends Component {


    render() {
        return (
            <>
                <h2>Status!</h2>

                <h2>KoboldUser333</h2>
                <div class="level-box">
                    <h3>Player Level: 3</h3>
                    <h3>Kobold Level: 5</h3>
                </div>


                <div class="stats-box">
                    <h3>Stats</h3>
                    <div class="stats-total">
                        <h4>Muscle: 8 + 4</h4>
                        <h4>Fitness: 8 + 3</h4>
                        <h4>Eloquence: 8 + 5</h4>
                        <h4>Intellect: 8 + 2</h4>
                        <h4>Mana: 8 + 5</h4>
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