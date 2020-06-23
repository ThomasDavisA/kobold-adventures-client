import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatusBar from '../component/StatusBar';

export default class AreaSelectPage extends Component {


    render() {
        return (
            <>
                <div class="news-box">
                    <h3>Adventure!</h3>
                </div>

                <h3>Areas:</h3>
                <button class='adv-button'>The Wooded Path</button>
                <Link to="/main/difficultyselect/">
                    <button>Lakeside</button>
                    <button>Near the Kobold Den</button>
                    <button>The Dragon's Lair</button>
                </Link>


                <button onClick={() => this.props.history.goBack()}>Go back</button>


                <StatusBar />
            </>
        )
    }
}