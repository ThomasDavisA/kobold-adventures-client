import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KoboldsContext from '../context/KoboldContext';

export default class NewKobold extends Component {
    static contextType = KoboldsContext;

    render() {
        return(
            <>
                <form className='KoboldCreate' onSubmit={this.handleKobold()}>
                    
                </form>
            </>
        )
    }
}