import React, {Component} from 'react';
import routes from '../../router/routes';
import './Index.less';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = '登录';
    }

    handlerConfirm = () => {
        const {history} = this.props;
        history.replace({
            pathname: routes.Home.path
        });
    }

    render() {
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
                            <input className="form-input" id="username" type="text" placeholder="请输入手机号/邮箱"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">
                                <i className="icon icon-key"></i>
                            </label>
                            <input className="form-input" id="password" type="password" placeholder="请输入密码"/>
                        </div>
                        <div className="form-group">
                            <input className="form-check" id="remember" type="checkbox"/>
                            <label className="form-label" htmlFor="remember">记住密码</label>
                        </div>
                    </div>
                    <div className="login-footer">
                        <button className="btn btn-confirm" onClick={this.handlerConfirm}>登录</button>
                    </div>
                </div>
            </div>
        );
    }
}