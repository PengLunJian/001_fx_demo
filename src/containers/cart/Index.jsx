import React, {Component} from 'react';
import FooterBar from '../../components/footerBar/FooterBar';
import './Index.less';
import HeaderBar from "../../components/headerBar/HeaderBar";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="cart">
                <HeaderBar title="购物车"/>
                <FooterBar/>
            </div>
        )
    }
}