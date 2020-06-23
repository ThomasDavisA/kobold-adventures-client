import React, { Component } from 'react';
import LoginForm from '../component/LoginForm';

export default class LoginPage extends Component {


    render() {
        return (
            <>
                <h1>Kobold Adventures!</h1>
                <h2>(error messages/register success/failures here)</h2>

                <LoginForm history={this.props.history} />
            </>
        )
    }
}