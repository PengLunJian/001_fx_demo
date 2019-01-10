import React, {Component} from 'react';
import FooterBar from '../../components/FooterBar/FooterBar';

export default class Home extends Component {
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
            <div className="Home">
                <FooterBar></FooterBar>
            </div>
        )
    }
}