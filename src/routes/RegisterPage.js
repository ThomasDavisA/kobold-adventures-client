import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthApiService from '../services/auth-api-service';
import KoboldApiSerivce from '../services/kobolds-api-service';
import KoboldsContext from '../context/KoboldContext';
import TokenService from '../services/token-service';

export default class RegisterPage extends Component {
    static contextType = KoboldsContext;

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { username, password } = ev.target

        this.setState({ error: null })
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
                                console.log(res)
                                this.context.setKobold(res[0])
                                this.props.history.push(`/main`)
                            })

                    })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })

    }

    render() {
        const { error } = this.state

        return (
            <form className='RegistrationForm' onSubmit={this.handleSubmit}>

                <h3>Create a new Kobold</h3>

                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>

                <div className='username'>
                    <label htmlFor='RegistrationForm__user_name'>
                        Username: 
                    </label>
                    <input name='username' type='text' required id='RegistrationForm__user_name' />
                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm__password'>
                        Password: 
                    </label>
                    <input name='password' type='password' required id='RegistrationForm__password' />
                </div>

                <Link to='/'><button>Go Back</button></Link>
                <button type='submit'>Register</button>
            </form>
        )
    }
}