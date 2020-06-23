import React, { Component } from 'react';

export default class StatusBar extends Component {


    render() {
        return (
            <>
                <div class="character-bar">
                    <canvas class="kobold-portrait"></canvas>
                    <div class="bar-box">
                        <div class="bar-container">
                            <h3>Life:</h3>
                            <div class="bar-background"><div class="life-bar"></div></div>
                        </div>
                        <div class="bar-container">
                            <h3>Energy:</h3>
                            <div class="bar-background"><div class="energy-bar"></div></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}