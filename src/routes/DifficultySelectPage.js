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

                <h3>Difficulty:</h3>
                <div class="difficulty-bar">
                    <Link to='/main/adventure'>
                    <button class="difficulty-button">easy</button>
                    <button class="difficulty-button">medium</button>
                    <button class="difficulty-button">hard</button>
                    </Link>
                </div>

                <button onClick={() => this.props.history.goBack()}>Go back</button>


                <StatusBar />
            </>
        )
    }
}
