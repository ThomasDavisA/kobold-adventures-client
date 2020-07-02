import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LocationsService from '../services/locations-api-service';
import KoboldsContext from '../context/KoboldContext';
import KoboldsApiService from '../services/kobolds-api-service';
import AreaButton from '../component/AreaButton';

import './AreaSelectPage.css';

export default class AreaSelectPage extends Component {
    static contextType = KoboldsContext;

    state = {
        locations: null,
    }

    componentDidMount = () => {
        LocationsService.getLocations()
            .then(locations => {
                this.setState({
                    locations
                })
            })
    }

    renderLocations = () => {
        const render = this.state.locations.map(location => {
            return <AreaButton key={location.location_id} location={location} history={this.props.history} className='location-box__button' />
        })
        return render;

    }

    //Get our Adventure and store it in state
    handleClick = (location) => {
        this.context.setLocation(location);
        LocationsService.getAdventure(location)
            .then(adventure => {
                this.context.setAdventure(adventure[0], adventure[1])
                this.props.history.push(`/main/adventure`);
            })
    }

    handleGo = () => {
        if (this.context.location !== null) {
            LocationsService.getAdventure(this.context.location)
                .then(adventure => {
                    this.context.setAdventure(adventure[0], adventure[1])
                    this.props.history.push(`/main/adventure`);
                })
        }
    }

    render() {
        return (
            <>
                <div className="location-box">
                    <h3>Adventure!</h3>
                    <h5>Pick a Location</h5>
                </div>


                <div className='location-select-box'>
                    {this.state.locations &&
                        this.renderLocations()}
                </div>

                <div className='location-accept'>
                    <button className='location-button__go-back' onClick={() => this.props.history.goBack()}>Go back</button>
                    {this.context.location &&
                        <button className='location-button__start-adventure' onClick={() => this.handleGo()}>Go!</button>
                    }
                </div>
            </>
        )
    }
}