import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }

    handleSubmit(event) {
        axios
            .post(
                'https://api.devcamp.space/sessions', 
                {
                    client: {
                        email: this.state.email,
                        password: this.state.password
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === 'created') {
                    //console.log('you can come in...')
                    this.props.handleSuccessfulAuth();
                }   else {
                    this.setState({
                        errorText: 'wrong email or password'
                    });
                    this.props.handleUnsuccessfulAuth();
                }
            })
            .catch(error => {
                this.setState({
                    errorText: 'an error ocurred'
                });
                this.props.handleUnsuccessfulAuth();
                
            });

            //he creado una función con tres órdenes: la primera, la página web en la que está
            //almacenada la info, la segunda es la info, y la tercera, la petición para verificar si concuerdan<3
        
        event.preventDefault();
    }



    render() {
        return (
            <div>

                <h1>my lovely room</h1>

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit} className='auth-form-wrapper'>

                    <div className='form-group'>
                        <FontAwesomeIcon icon='envelope' />

                        <input 
                        
                            type="email"
                            name='email'
                            placeholder='your email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        
                        />

                    </div>
                   

                    <div className='form-group'>
                        <FontAwesomeIcon icon='key' />

                        <input 
                        
                            type='password'
                            name='password'
                            placeholder='your password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            
                        />
                    </div>

                    
                    <button type='submit' className='btn'>entrar</button>
                    

                </form>
                
            </div>
        );
    }
}