import App from './app';
import Axios from 'axios';
import Auth from '../auth/auth';
import { connect } from 'react-redux';
import '../common/template/dependencies';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { validateToken } from '../auth/auth.actions';

class AuthOrApp extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }
    
    render() {
        const { user, validToken } = this.props.auth

        if (user && validToken) {
            Axios.defaults.headers.common['authorization'] = user.token;

            return <App>{ this.props.children }</App>
        } else if (!user && !validToken) {
            return <Auth />
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)