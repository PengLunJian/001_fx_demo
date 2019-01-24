import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import routes from '../../router/routes';
import './FooterBar.less';

class FooterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: '首页',
                    icon: 'icon-home',
                    path: routes.Home.path
                },
                {
                    name: '生活',
                    icon: 'icon-life',
                    path: routes.Life.path
                },
                {
                    name: '购物车',
                    icon: 'icon-cart',
                    path: routes.Cart.path
                },
                {
                    name: '我的',
                    icon: 'icon-mine',
                    path: routes.Mine.path
                }
            ]
        };
    }

    componentDidMount() {

    }

    handleClick = (path) => {
        const {username, password} = sessionStorage;
        if (path === routes.Mine.path) {
            if (username && password) {
                path = routes.Mine.path;
            } else {
                path = routes.Login.path;
            }
        }
        const {history} = this.props;
        history.replace({
            pathname: path
        });
    }

    render() {
        const {match} = this.props;
        const {path} = match;
        const {data} = this.state;
        return (
            <div className="footer">
                <div className="footer-inner">
                    {
                        data.map((item, index) => {
                            return (
                                <div className={'footer-item' + (item.path === path ? ' active' : '')}
                                     key={index}
                                     onClick={() => {
                                         this.handleClick(item.path);
                                     }}>
                                    <i className={'icon ' + item.icon}></i>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(FooterBar);