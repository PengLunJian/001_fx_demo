import React, {Component} from 'react';
import FooterBar from "../../components/footerBar/FooterBar";
import HeaderBar from "../../components/headerBar/HeaderBar";

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="mine">
                <HeaderBar title="我的"/>
                <FooterBar/>
            </div>
        )
    }
}