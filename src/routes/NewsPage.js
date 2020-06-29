import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';

import './NewsPage.css';


export default class NewsPage extends Component {

    handleLogout = () => {
        TokenService.clearAuthToken()
    }

    render() {
        return (
            <>
                <div className="container__news">
                    <h2 className='news__header'>Current News!</h2>
                    <p className='news__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id nemo esse sit ducimus voluptatibus quaerat. Maxime, odit dignissimos! Harum molestias vitae dolor debitis beatae vel nihil? Quos, dolorum adipisci.</p>
                </div>

                <div className='container__buttons'>
                    <Link to='/main/areaselect'><button className='adv-button'>Go Adventuring!</button></Link>
                    <Link to='/main/status'><button>Kobold Status</button></Link>
                    <Link to='/'><button onClick={() => this.handleLogout()}>Logout</button></Link>
                </div>
            </>
        )
    }
}