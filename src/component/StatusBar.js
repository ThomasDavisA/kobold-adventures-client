import React, { Component } from 'react';
import KoboldsContext from '../context/KoboldContext';

import './StatusBar.css';

export default class StatusBar extends Component {
    static contextType = KoboldsContext;

    render() {
        return (
            <>
                <div className="status-bar">
                    <canvas className="status-bar__portrait"></canvas>
                    <div className="bar-box">
                        <div className="bar-container">
                            <h3>Life: <span>{this.context.kobold.kobold_health}</span></h3>
                            <div className="bar-background"><div className="life-bar"></div></div>
                        </div>
                        <div className="bar-container">
                            <h3>Energy:<span>{this.context.kobold.kobold_energy}</span></h3>
                            <div className="bar-background"><div className="energy-bar"></div></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}