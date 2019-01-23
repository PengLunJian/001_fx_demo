import React, {Component} from 'react';
import FooterBar from '../../components/footerBar/FooterBar';
import './Index.less';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = '购物车';
    }

    render() {
        return (
            <div className="cart">
                <FooterBar/>
            </div>
        )
    }
}