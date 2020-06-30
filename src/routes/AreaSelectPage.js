import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatusBar from '../component/StatusBar';
import LocationsService from '../services/locations-api-service';
import KoboldsContext from '../context/KoboldContext';
import KoboldsApiService from '../services/kobolds-api-service';

import './AreaSelectPage.css';

export default class AreaSelectPage extends Component {
    static contextType = KoboldsContext;

    setLocation = event => {
        console.log(event);
    }

    //Get our Adventure and store it in state
    handleClick = (location) => {
        this.context.setLocation(location);
        LocationsService.getAdventure(location)
            .then(adventure => {
                console.log(adventure)
                this.context.setAdventure(adventure[0], adventure[1])
                console.log(this.context)
                this.props.history.push(`/main/adventure`);
            })
    }

    render() {
        return (
            <>
                <div className="location-box">
                    <h3>Adventure!</h3>
                </div>


                <div className='location-select-box'>
                    <button value='1' onClick={() => this.handleClick(1)}>The Lake</button>
                    <button onClick={() => this.props.history.goBack()}>Go back</button>
                </div>


                <StatusBar />
            </>
        )
    }
}