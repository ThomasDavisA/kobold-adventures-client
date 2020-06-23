import React, { Component } from 'react';
import KoboldsContext from '../context/KoboldContext';
import AuthApiService from '../services/auth-api-service';

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
                this.context.kobold = res;
                console.log(this.context)
                this.props.history.push(`/main`)
                
            })
            .catch(res => {
                console.error(res)
                this.setState({ error: res.error });
            })

    }

    render() {
        return (
            <form className='LoginForm' onSubmit={this.handleSubmit}>
                <div className='container'>
                    <label htmlFor='username'>Username</label>
                    <input name='username' type='text'></input>

                    <label htmlFor="password">Password</label>
                    <input name='password' type="text"></input>
                </div>
                <div className="container">
                    <button type='submit'>Login</button>
                    <button >Register</button>
                </div>
            </form>
        )
    }
}