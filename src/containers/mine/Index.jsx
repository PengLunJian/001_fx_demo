import React, {Component} from 'react';
import FooterBar from "../../components/footerBar/FooterBar";
import './Index.less';

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = '我的';
    }

    render() {
        return (
            <div className="mine">
                <FooterBar/>
            </div>
        )
    }
}