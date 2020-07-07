import React, { Component } from 'react';
import LoginForm from '../component/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {


    render() {
        return (
            <>
                <div className='div__header'>
                    <h1>Kobold Adventures!</h1>
                </div>
                <LoginForm history={this.props.history} />
            </>
        );
    }
}