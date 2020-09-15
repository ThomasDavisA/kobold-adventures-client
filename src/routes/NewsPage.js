import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import KoboldsApiService from '../services/kobolds-api-service';
import KoboldsContext from '../context/KoboldContext';

import './NewsPage.css';


export default class NewsPage extends Component {
    static contextType = KoboldsContext;

    componentDidMount = () => {
        KoboldsApiService.getKoboldByToken()
            .then(kobold => {
                this.context.setKobold(kobold);
            });
    }

    
    handleLogout = () => {
        TokenService.clearAuthToken();
    }

    render() {
        return (
            <>
                <div className="container__news">
                    <h2 className='news__header'>Current News!</h2>
                    <p className='news__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id nemo esse sit ducimus voluptatibus quaerat. Maxime, odit dignissimos! Harum molestias vitae dolor debitis beatae vel nihil? Quos, dolorum adipisci.</p>
                </div>

                <div className='container__buttons'>
                    <Link className='button-link' to='/main/areaselect'><button className='button__menu'>Go Adventuring!</button></Link>
                    <Link className='button-link' to='/main/status'><button className='button__menu'>Kobold Status</button></Link>
                    <Link className='button-link' to='/login'><button className='button__menu' onClick={() => this.handleLogout()}>Logout</button></Link>
                </div>
            </>
        );
    }
}