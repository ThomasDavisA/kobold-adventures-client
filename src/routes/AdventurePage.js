import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatusBar from '../component/StatusBar';

export default class AdventurePage extends Component {


    render() {
        return (
            <>
                <div class="bar-background progress-background">
                    <div class="progress-complete"></div>
                </div>
                <h3>Event!</h3>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id nemo esse sit ducimus voluptatibus
                quaerat. Maxime, odit dignissimos! Harum molestias vitae dolor debitis beatae vel nihil? Quos, dolorum
                adipisci.</p>
                <h4>Obsticle!</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit dolor aliquam at assumenda
                consectetur dolore minima ea voluptatibus. Hic eius odit et eos pariatur? Facere ratione quis nisi
                doloremque?</p>


                <div class="button-box">
                    <Link to='/main/adventure/rewards'>
                    <button class='action-button'>Stab it with your stick!</button>
                    <button class='action-button'>Leap over the pit!</button>
                    <button class='action-button'>Take an alternate path!</button>
                    <button class='action-button'>Lacrima!</button>
                    </Link>
                </div>

                <StatusBar />
            </>
        )
    }
}