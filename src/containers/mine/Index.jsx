import React, {Component} from 'react';
import FooterBar from "../../components/FooterBar/FooterBar";

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
                <h1>我的</h1>
                <FooterBar></FooterBar>
            </div>
        )
    }
}