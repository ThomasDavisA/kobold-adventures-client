import React, { Component } from 'react';
import './LandingPage.css';


export default class LoginPage extends Component {

    handleClick = () => {
        this.props.history.push('/login');
    }


    render() {
        return (
            <>
                <div className='div__header'>
                    <h1>Kobold Adventures!</h1>
                </div>
                <div className='div-landing-page'>
                    <h3 className='div-landing-page__title'>Join the world of Kobolds!</h3>
                    <p className='div-landing-page__text'>Come play as a Kobold in a magical world of fantasy and adventure!  Create a kobold, go on adventures, and see what silly situations you can get yourself into!</p>
                    <h3 className='div-landing-page__list-title'>Current features include:</h3>
                    <ul className='div-landing-page__list'>
                        <li className='div-landing-page__list-element'>Going on adventures!</li>
                        <li className='div-landing-page__list-element'>Gathering money!</li>
                        <li className='div-landing-page__list-element'>Leveling up!  And assigning points!</li>
                    </ul>

                    <h2 className='div-landing-page__cta'>Join now!</h2>
                    
                    <button type='button' onClick={() => this.handleClick()} className='div-landing-page__goto-login'>Let's go!</button>
                </div>
            </>
        );
    }
}