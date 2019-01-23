import React, {Component} from 'react';
import FooterBar from '../../components/footerBar/FooterBar';
import './Index.less';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = '生活';
    }

    render() {
        return (
            <div className="life">
                <FooterBar/>
            </div>
        )
    }
}