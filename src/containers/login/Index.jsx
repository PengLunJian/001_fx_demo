import React, {Component} from 'react';
import './Index.less';

export default class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'HELLO REACT !'
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        this.setState({
            title: 'HELLO WORLD !'
        });
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    render() {
        const {title} = this.state;
        return (
            <div className="module">
                <h1 className="title">{title}</h1>
            </div>
        );
    }
}