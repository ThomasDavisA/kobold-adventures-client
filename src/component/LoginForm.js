import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import KoboldsContext from '../context/KoboldContext';
import AuthApiService from '../services/auth-api-service';
import KoboldsApiService from '../services/kobolds-api-service';

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
                console.log(res.authToken)
                KoboldsApiService.getKoboldByToken()
                    .then(kobold => {
                        console.log(kobold)
                        this.context.setKobold(kobold);
                        console.log(this.context)
                        this.props.history.push(`/main`)
                    })

            })
            .catch(res => {
                this.setState({ error: res.error });
            })

    }

    render() {
        return (
            <>
            {this.state.error && 
            <h3>{this.state.error}</h3>}
            <form className='LoginForm' onSubmit={this.handleSubmit}>
                <div className='container'>
                    <label htmlFor='username'>Username</label>
                    <input name='username' type='text' ></input>

                    <label htmlFor="password">Password</label>
                    <input name='password' type='password' ></input>
                </div>
                <div className="container">
                    <button type='submit'>Login</button>
                    <Link to='/register'><button >Register</button></Link>
                </div>
            </form>
            </>
        )
    }
}