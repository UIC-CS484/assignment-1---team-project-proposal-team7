import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div class="mtxl">
               Hello {this.props.name}
            </div>
        );
    }
}

export default Login;