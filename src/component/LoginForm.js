import React, { Component } from 'react';
import TokenService from '../services/token-service';
import KoboldsContext from '../context/KoboldContext';
import AuthApiService from '../services/auth-api-service';
import KoboldsApiService from '../services/kobolds-api-service';

import './LoginForm.css'

export default class LoginForm extends Component {
    static contextType = KoboldsContext;

    state = { error: null }

    onLoginSuccess() {

    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ error: null });
        const { username, password } = event.target;
        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                username.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken)
                KoboldsApiService.getKoboldByToken()
                    .then(kobold => {
                        this.context.setKobold(kobold);
                        this.props.history.push(`/main`)
                    })

            })
            .catch(res => {
                this.setState({ error: res.error });
            })

    }

    onRegister = () => {
        this.props.history.push('/register')
    }

    render() {
        return (
            <>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='form__container'>
                        <label classanme='form__label' htmlFor='username'>Username</label>
                        <input className='form__input' name='username' type='text' ></input>
                    </div>
                    <div className='form__container'>
                        <label classanme='form__label' htmlFor='password'>Password</label>
                        <input className='form__input' name='password' type='password' ></input>
                    </div>
                    <div className="form__container">
                        <button className='form__button' type='submit'>Login</button>
                        <button type='button' className='form__button' onClick={() => this.onRegister()}>Register</button>
                    </div>
                </form>

                {this.state.error &&
                    <div className='error-container'>
                        <h4>{this.state.error}</h4>
                    </div>}
            </>
        )
    }
}