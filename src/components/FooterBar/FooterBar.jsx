import React, {Component} from 'react';
import './FooterBar.less';

export default class FooterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-inner">
                    <div className="footer-item active">
                        <i className="icon icon-home"></i>
                        <span>首页</span>
                    </div>
                    <div className="footer-item">
                        <i className="icon icon-life"></i>
                        <span>生活</span>
                    </div>
                    <div className="footer-item">
                        <i className="icon icon-cart"></i>
                        <span>购物车</span>
                    </div>
                    <div className="footer-item">
                        <i className="icon icon-mine"></i>
                        <span>我的</span>
                    </div>
                </div>
            </div>
        )
    }
}