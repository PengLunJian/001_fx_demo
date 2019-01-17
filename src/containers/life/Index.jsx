import React, {Component} from 'react';
import FooterBar from '../../components/FooterBar/FooterBar';
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
                <h1>生活</h1>
                <FooterBar></FooterBar>
            </div>
        )
    }
}