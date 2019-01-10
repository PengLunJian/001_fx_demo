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
                    <div className="footer-item">
                        <span>首页</span>
                    </div>
                    <div className="footer-item">
                        <span>待定</span>
                    </div>
                    <div className="footer-item">
                        <span>待定</span>
                    </div>
                    <div className="footer-item">
                        <span>我的</span>
                    </div>
                </div>
            </div>
        )
    }
}