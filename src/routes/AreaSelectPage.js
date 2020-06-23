import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatusBar from '../component/StatusBar';

export default class AreaSelectPage extends Component {

    setLocation = event => {
        console.log(event);
    }


    render() {
        return (
            <>
                <div className="news-box">
                    <h3>Adventure!</h3>
                </div>

              

                <button onClick={() => this.props.history.goBack()}>Go back</button>


                <StatusBar />
            </>
        )
    }
}