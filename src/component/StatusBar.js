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
                    <div className="status-bar__bar-box">
                        <div className="status-bar__bar-container">
                            <h5>Life: <span>{this.context.kobold.kobold_health}</span></h5>
                            <div className="status-bar__bar-background"><div className="life-bar"></div></div>
                        </div>
                        <div className="status-bar__bar-container">
                            <h5>Adventures: <span>{this.context.kobold.kobold_energy}</span></h5>
                            <div className="status-bar__bar-background"><div className="energy-bar"></div></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}