import React, {Component} from 'react';
import {connect} from 'react-redux';
import routes from '../../router/routes';
import {mapStateToProps, mapDispatchToProps} from "./Controller";
import './Index.less';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        document.title = '登录';
    }

    handleConfirm = () => {
        const {username, password} = this.state;
        const data = {username, password};
        this.props.ajaxRequestSelectAccount(data)
            .then((res) => {
                res = res || {};
                const {success, data} = res;
                if (success) {
                    if (username === data.username &&
                        password === data.password) {
                        const {history} = this.props;
                        history.replace({
                            pathname: routes.Home.path
                        });
                    }
                }
            });
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="login">
                <div className="login-bg"></div>
                <div className="login-content">
                    <div className="login-header">
                        <h1 className="login-title">Tmall Shopping</h1>
                    </div>
                    <div className="login-body">
                        <div className="form-group">
                            <label className="form-label" htmlFor="username">
                                <i className="icon icon-user"></i>
                            </label>
                            <input className="form-input" id="username" type="text" placeholder="请输入手机号/邮箱"
                                   value={username} onChange={this.handleUsernameChange}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">
                                <i className="icon icon-key"></i>
                            </label>
                            <input className="form-input" id="password" type="password" placeholder="请输入密码"
                                   value={password} onChange={this.handlePasswordChange}/>
                        </div>
                        <div className="form-group">
                            <input className="form-check" id="remember" type="checkbox"/>
                            <label className="form-label" htmlFor="remember">记住密码</label>
                        </div>
                    </div>
                    <div className="login-footer">
                        <button className="btn btn-confirm" onClick={this.handleConfirm}>登录</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);