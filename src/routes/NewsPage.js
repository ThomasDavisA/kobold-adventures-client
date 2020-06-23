import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatusBar from '../component/StatusBar';

export default class NewsPage extends Component {

    handleLocations = () => {
        
    }

    render() {
        return (
            <>
                <div className="news-box">
                    <h3>Current News!</h3>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id nemo esse sit ducimus voluptatibus quaerat. Maxime, odit dignissimos! Harum molestias vitae dolor debitis beatae vel nihil? Quos, dolorum adipisci.</p>
                </div>

                <Link to='/main/areaselect'><button className='adv-button'>Go Adventuring!</button></Link>
                <Link to='/main/status'><button>Kobold Status</button></Link>
                <Link to='/'><button>Logout</button></Link>

                <StatusBar />
            </>
        )
    }
}