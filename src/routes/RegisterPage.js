import React, { Component } from 'react';

import AuthApiService from '../services/auth-api-service';
import KoboldApiSerivce from '../services/kobolds-api-service';
import KoboldsContext from '../context/KoboldContext';
import TokenService from '../services/token-service';

import './RegisterPage.css';

export default class RegisterPage extends Component {
    static contextType = KoboldsContext;

    state = {
        error: null,
        clicked: false
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            error: null,
            clicked: true
        });
        const { username, password } = ev.target;
        AuthApiService.postUser({
            username: username.value,
            password: password.value,

        })
            .then(user => {
                AuthApiService.postLogin({
                    username: username.value,
                    password: password.value
                })
                    .then(res => {
                        username.value = ''
                        password.value = ''
                        TokenService.saveAuthToken(res.authToken)
                        KoboldApiSerivce.postKobold(user.user_name)
                            .then(res => {
                                this.props.history.push(`/main`)
                            });

                    });
            })
            .catch(res => {
                this.setState({ clicked: false })
                this.setState({ error: res.error })
            });
    }

    onGoBack = () => {
        this.props.history.goBack();
    }

    render() {
        const { error } = this.state;

        return (
            <>
                <div className='div__header'>
                    <h1>Kobold Adventures!</h1>
                </div>

                <form className='RegistrationForm' onSubmit={this.handleSubmit}>

                    <h2>Create a new Kobold</h2>

                    <div className='form__container'>
                        <label htmlFor='RegistrationForm__username'>
                            Username
                    </label>
                        <input className='form__input' name='username' type='text' required id='RegistrationForm__username' />
                    </div>
                    <div className='form__container'>
                        <label htmlFor='RegistrationForm__password'>
                            Password
                    </label>
                        <input className='form__input' name='password' type='password' required id='RegistrationForm__password' />
                    </div>

                    <div className='form__container'>
                        <button className='form__button button__login' type='submit' disabled={this.state.clicked}>Register</button>
                        <button className='form__button button__register' type='button' onClick={() => this.onGoBack()}>Go Back</button>
                    </div>

                </form>


                {error &&
                    <div className='form__alert' role='alert'>
                        <h4 className='form__alert--red'>{error}</h4>
                    </div>}
            </>
        );
    }
}