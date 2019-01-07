import React, {Component} from 'react';
import './Index.less';

export default class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div className="module">
                <h1 className="title">Hello React!</h1>
            </div>
        );
    }
}