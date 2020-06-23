import React, { Component } from 'react';

export default class StatusBar extends Component {


    render() {
        return (
            <>
                <div className="character-bar">
                    <canvas className="kobold-portrait"></canvas>
                    <div className="bar-box">
                        <div className="bar-container">
                            <h3>Life:</h3>
                            <div className="bar-background"><div className="life-bar"></div></div>
                        </div>
                        <div className="bar-container">
                            <h3>Energy:</h3>
                            <div className="bar-background"><div className="energy-bar"></div></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}