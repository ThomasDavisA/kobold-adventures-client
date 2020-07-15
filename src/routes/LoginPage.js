import React, { Component } from 'react';
import queryString from 'query-string';
import LoginForm from '../component/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {

    componentDidMount = () => {
        const params = queryString.parse(document.location.search);
        const redirect = params.redirect; // this would be "abcdefg" if the query was "?redirect=abcdefg"
        if (document.location.pathname === '/' && redirect) {
            document.location.assign(`${document.location.origin}/${redirect}`);
        }
    }

    render() {
        return (
            <>
                <div className='div__header'>
                    <h1>Kobold Adventures!</h1>
                </div>
                <LoginForm history={this.props.history} />
                <div className='div__header'>
                    <p>Just want to try it out?  Log in with our test account:</p>
                    <h4>Username: dunder</h4>
                    <h4>Password: password</h4>
                </div>
            </>
        );
    }
}