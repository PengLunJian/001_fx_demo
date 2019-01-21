import React, {Component} from 'react';
import FooterBar from '../../components/footerBar/FooterBar';
import HeaderBar from "../../components/headerBar/HeaderBar";
import './Index.less';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="life">
                <HeaderBar title="生活"/>
                <FooterBar/>
            </div>
        )
    }
}